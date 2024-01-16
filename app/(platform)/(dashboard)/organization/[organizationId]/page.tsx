// import { auth } from "@clerk/nextjs";
// const { orgId } = auth();
// import TestFormTwo from "../../_components/formTestTwo";
import TestForm from "../../_components/formWithHook";
import { db } from "@/lib/db";
import BoardList from "../../_components/boardList";

export default async function OrganizationIdPage() {

  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col gap-y-4">
      {/* <TestFormTwo /> */}
      <TestForm />
      <BoardList boards={boards} />
    </div>
  );
}
