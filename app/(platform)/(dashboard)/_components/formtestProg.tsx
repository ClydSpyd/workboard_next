"use client";
import { useEffect, useRef } from "react";
import { CreateFormState, createBoard } from "@/actions/createBoardProgressive";
import { Button } from "@/components/ui/button";
import { useFormLoading } from "@/hooks/useFormLoading";
import { useFormState } from "react-dom";

const TestForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setLoading } = useFormLoading();
  const initialState: CreateFormState = { message: null, errors: {} };
  const [ state, dispatch] = useFormState(createBoard, initialState)
  
  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    formRef.current?.reset();
    dispatch(formData);
    setLoading(false);
  };

  useEffect(() => {
    console.log("STATE: ", state)
  },[state])

  return (
    <>
      <form ref={formRef} action={handleSubmit}>
        <input
          type="text"
          required
          id="title"
          name="title"
          placeholder="ENTER BOARD TITLE"
          className="border-black border p-1.5 rounded-sm mt-2"
        />
        <Button className="ml-2" type="submit">
          GO
        </Button>
      </form>
      {state?.errors?.title &&
        state.errors.title.map((error: string) => <p className="font-sans text-sm text-rose-400 mt-0" key={error}>{error}</p>)}
    </>
  );
};

export default TestForm;
