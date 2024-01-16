import { ZodObject } from "zod";

export type ValidationResult = {
  error?: Record<string,string>;
  validatedResult: Record<string, any>;
};

export const validateFormClient = async <T extends ZodObject<any>>(
  schema: T,
  formData: FormData
): Promise<ValidationResult> => {
  
  const keys = Object.keys(schema.shape);
  const newItem: Record<string, string> = keys.reduce(
    (acc, key) => ({ ...acc, [key]: formData.get(key) as string }),
    {}
  );
  const validatedResult = schema.safeParse(newItem);

  if (!validatedResult.success) {
    const errors: Record<string, string> = {};
    validatedResult.error.issues.forEach(
      ({ path, message }) => (errors[path[0]] = message)
    );
    return {
      error: errors,
      validatedResult: {},
    };
  }

  return { validatedResult };

  // const dataObject =
};
