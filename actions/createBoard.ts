"use server";
import { db } from "@/lib/db";
import { Board } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const BoardSchema = z.object({
  title: z.string().min(5, {
    message: "Minimum 5 characters for board title",
  }),
});

export const createBoard = async ({ title }: { title: string }) => {
  console.log("SERVER ACTION");

  await db.board.create({
    data: { name: title },
  });

  revalidatePath("/organization/:id");
};
// export const createBoard = async (formData: FormData) => {
//   console.log("SERVER ACTION");
//   const { title } = BoardSchema.parse({
//     title: formData.get("title"),
//   });

//   await db.board.create({
//     data: { name: title },
//   });

//   revalidatePath('/organization/:id')
// };
