"use client";
import { useEffect, useRef } from "react";
import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormLoading } from "@/hooks/useFormLoading";
import { z } from "zod";
import { validateFormClient } from "@/lib/validateFormClient";
import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastConfig } from "@/lib/toastConfig";
import { useAction } from "@/hooks/useAction";

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
  const { execute, fieldErrors } = useAction(createBoard, {
    onError: (error) => {
      console.log("ERROR: ", error);
    },
    onSuccess: () => console.log("SUCCESS!"),
  });
  const { setLoading, isLoading } = useFormLoading();

  const onSubmit = async (formData: FormData) => {
    setLoading(true);
    const title = formData.get('title') as string;
    await execute({ title })
    setLoading(false);
  };

  useEffect(() => {
    if(fieldErrors){
      console.log('FE: ', fieldErrors)
      Object.values(fieldErrors).forEach((error: string[]) =>
        toast.error(error[0], toastConfig.warnTopLeft)
      );
      }
  },[fieldErrors])

  return (
    <>
      <p>{isLoading ? "loading" : "ready"}</p>
      <form ref={formRef} action={onSubmit}>
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
