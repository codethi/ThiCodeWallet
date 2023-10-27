import z from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, "O nome precisa ter no minímo 3 caracteres")
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .email("Email inválido.")
      .nonempty("O email é obrigatório.")
      .toLowerCase(),
    password: z.string().min(6, "A senha precisa ter no minímo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha precisa ter no minímo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
