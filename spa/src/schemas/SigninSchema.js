import z from "zod";

export const signinSchema = z.object({
  email: z.string().nonempty("O email é obrigatório").email().toLowerCase(),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
});
