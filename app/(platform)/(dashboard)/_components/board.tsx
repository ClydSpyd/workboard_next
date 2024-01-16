import { deleteBoard } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";
import { useFormLoading } from "@/hooks/useFormLoading";

interface Props {
  id: string,
  name: string
}

const Board = ({ id, name }: Props) => {
  const { setLoading } = useFormLoading();
  
  const handleDelete = async () => {
    setLoading(true);
    await deleteBoard(id);
    setLoading(false);
  };
  
  // option to avoid passing ID inline to function => bind the funtionto the ID
  // and call:   onClick={() => handleDelete()}
  
  // const deleteWithId = deleteBoard.bind(null, id);
  // const handleDelete = async () => {
  //   setLoading(true);
  //   await deleteWithId();
  //   setLoading(false);
  // };

  return (
    <div className="flex justify-between items-center mb-2 border rounded-md px-2 py-1 border-purple-500">
      <p key={id}>Board name: {name}</p>
      <Button
        onClick={handleDelete}
        variant={"destructive"}
        size={"sm"}
      >
        ö
      </Button>
    </div>
  );
}


export default Board;