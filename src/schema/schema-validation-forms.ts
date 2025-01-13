import { z } from "zod";

export const validVacancy = [
  "Desenvolvedor Frontend",
  "Desenvolvedor Backend",
  "Desenvolvedor FullStack",
  "Designer UI/UX",
  "Scrum Master",
  "Product Manager",
  "Product Owner",
  "Career Consultant",
] as const;

export const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório."),
  lastName: z.string().min(1, "Sobrenome é obrigatório."),
  email: z.string().email("Por favor, insira um email válido."),
  position: z.enum(validVacancy, { message: "Por favor, selecione uma vaga válida." }),
  description: z.string().min(50, "O campo deve ter pelo menos 50 caracteres.")
});

export type FormData = z.infer<typeof formSchema>;
