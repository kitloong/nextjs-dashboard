'use server'

import { z } from '@/zod/zod'

const ZodAttribute = z.string()
  .min(1)
  .pipe(
    z.number({
      coerce: true,
    }).min(0)
      .max(255),
  )

const schema = z.object({
  name: z
    .string()
    .min(1),
  types: z
    .array(z.string())
    .min(1),
  eggGroups: z
    .array(z.string())
    .min(1),
  hp: ZodAttribute,
  attack: ZodAttribute,
  defense: ZodAttribute,
  special_attack: ZodAttribute,
  special_defense: ZodAttribute,
  speed: ZodAttribute,
})

type FormState = {
  success: boolean;
  message: string;
  scrollTop: boolean;
  formKey: number;
  errors?: {
    [key in keyof typeof schema.shape]?: string[];
  };
}

export default async function create(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    types: formData.getAll('types'),
    eggGroups: formData.getAll('eggGroups'),
    hp: formData.get('hp'),
    attack: formData.get('attack'),
    defense: formData.get('defense'),
    special_attack: formData.get('special_attack'),
    special_defense: formData.get('special_defense'),
    speed: formData.get('speed'),
  })

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      success: false,
      scrollTop: false,
      formKey: prevState.formKey,
      message: 'Validation error',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Mock error.
  if (validatedFields.data.name === 'error') {
    return {
      success: false,
      scrollTop: true,
      formKey: prevState.formKey,
      message: 'Unexpected error occurred. Please try again.',
    }
  }

  // Implement real add new record logic.

  return {
    success: true,
    scrollTop: true,
    formKey: prevState.formKey + 1,
    message: 'Record saved successfully.',
  }
}
