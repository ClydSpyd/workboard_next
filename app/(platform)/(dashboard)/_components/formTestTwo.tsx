"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useFormLoading } from "@/hooks/useFormLoading";
import { z } from "zod";
import { validateFormClient } from "@/lib/validateFormClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastConfig } from "@/lib/toastConfig";
import { cn } from "@/lib/utils";

const inputs = [
  {
    id: "firstName",
    name: "firstName",
    placeholder: "First Name",
    type: "text",
    required: true,
  },
  {
    id: "lastName",
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    name: "email",
    placeholder: "Email",
    type: "text",
    required: true,
  },
];

const PersonSchema = z.object({
  firstName: z.string().min(5, {
    message: "Minimum 5 characters for first",
  }),
  lastName: z.string().min(5, {
    message: "Minimum 5 characters for last name",
  }),
  email: z.string().email({ message: "Please enter a valid email"})
});

const TestForm = () => {
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { setLoading, isLoading } = useFormLoading();

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    const { validatedResult, error } = await validateFormClient(
      PersonSchema,
      formData
    );

    if (error) {
      setErrors(error)
      Object.values(error).forEach((error: string) =>
        toast.error(error, toastConfig.warnTopLeft)
      );
    } else {
      console.log(validatedResult)
      formRef.current?.reset();
    }

    setLoading(false);
  };

  return (
    <>
      <form
        onChange={() => setErrors(null)}
        ref={formRef}
        action={handleSubmit}
      >
        {inputs.map((input) => (
          <input
            key={input.id}
            disabled={isLoading}
            type={input.type}
            required={input.required}
            id={input.id}
            name={input.name}
            placeholder={input.placeholder}
            className={cn(
              "border-black border p-1.5 rounded-sm mt-2 mr-2",
              errors && errors[input.name] && "border-rose-600 border-2"
            )}
          />
        ))}
        <Button disabled={isLoading} type="submit">
          GO
        </Button>
      </form>
    </>
  );
};

export default TestForm;
