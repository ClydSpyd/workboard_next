import { useState, useCallback, useEffect } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-actions";

type Action<TInput, TOutput> = (
  data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  action: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<TInput> | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("isLoading: ", isLoading);
  }, [isLoading]);

  const execute = useCallback(
    async (input: TInput) => {
      setIsLoading(true);
      console.log('setIsLoading')

      try {
        const result = await action(input);

        if (!result) {
          return;
        }

        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
          options.onError?.(result.fieldErrors[0] as string);
          console.log(result.fieldErrors)
        }

        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
        }

        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    [options, action]
  );


  return{
    execute,
    error,
    fieldErrors,
    data,
    isLoading
  }
};
