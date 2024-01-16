"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type CreateFormState = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export const BoardSchema = z.object({
  title: z.string().min(5, {
    message: "Minimum 5 characters for board title",
  }),
});

export const createBoard = async (
  prevState: CreateFormState,
  formData: FormData
) => {
  console.log("SERVER ACTIÖN");
  const { orgId } = auth();
  const validatedFields = BoardSchema.safeParse({
    title: formData.get("title"),
  });
  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Form validation failed",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: { name: title },
    });

  } catch (error) {
    return {
      message: "DATABASE ERROR",
    };
  }
  
  revalidatePath("/organization/:id");
  redirect(`/organization/${orgId}`);
};
