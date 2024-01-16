"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export const deleteBoard = async (boardId: string) => {
  console.log("SERVER DELETE");
  await db.board.delete({
    where: {
      id: boardId,
    },
  });

  revalidatePath('/organization/:id')
}