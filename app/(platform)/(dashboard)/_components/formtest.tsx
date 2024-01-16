"use client";
import { useRef } from "react";
import { createBoard } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { useFormLoading } from "@/hooks/useFormLoading";
import { z } from "zod";
import { validateFormClient } from "@/lib/validateFormClient";
import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastConfig } from "@/lib/toastConfig";

const BoardSchema = z.object({
  title: z.string().min(5, {
    message: "Minimum 5 characters for board title",
  }),
  // id: nullable(z.number()).refine((value) => value !== null, {
  //   message: "Please provide an ID",
  // }),
});

const TestForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setLoading, isLoading } = useFormLoading();

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    const { validatedResult, error } = await validateFormClient(
      BoardSchema,
      formData
    );

    if (error) {
      Object.values(error).forEach((error: string) =>
        toast.error(error, toastConfig.warnTopLeft)
      );
    } else {
      await createBoard(validatedResult.data);
      formRef.current?.reset();
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <>
      <form ref={formRef} action={handleSubmit}>
        <input
          disabled={isLoading}
          type="text"
          required
          id="title"
          name="title"
          placeholder="ENTER BOARD TITLE"
          className="border-black border p-1.5 rounded-sm mt-2"
        />
        <Button disabled={isLoading} className="ml-2" type="submit">
          GO
        </Button>
      </form>
    </>
  );
};

export default TestForm;
