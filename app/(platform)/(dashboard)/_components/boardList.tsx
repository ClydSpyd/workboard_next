"use client";

import { useFormLoading } from "@/hooks/useFormLoading";
import { Board as BoardType }  from "@prisma/client";
import { useEffect } from "react";
import Board from "./board";

interface Props {
  boards: BoardType[];
}

const BoardList = ({ boards }: Props) => {
  const { isLoading } = useFormLoading();

  useEffect(() => {
    console.log("isLoading: ", isLoading);
  }, [isLoading]);

  return (
    <div className={`${isLoading && "opacity-30 pointer-events-none"}`}>
      {boards.length === 0 ? (
        <p>NO BOARDS FOUND</p>
      ) : (
        boards.map((board) => (
          <Board key={board.id} id={board.id} name={board.name} />
        ))
      )}
    </div>
  );
};

export default BoardList;
