import { z } from "zod";

export const validVacancy = [
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Mobile",
    "Desenvolvedor de Software",
    "Engenheiro de Software",
    "Arquiteto de Software",
    "UI/UX Designer",
    "Analista de Sistemas",
    "Analista Programador",
    "DevOps Engineer",
    "Engenheiro de Dados",
    "QA Engineer",
    "Scrum Master",
    "Product Owner",
  ] as const;

export const formSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório."),
    lastName: z.string().min(1, "Sobrenome é obrigatório."),
    email: z.string().email("Por favor, insira um email válido."),
    position: z.enum(validVacancy, {message: "Por favor, selecione uma vaga válida."}),
    description: z.string().min(50, "O campo deve ter pelo menos 50 caracteres.")
});

export type FormData = z.infer<typeof formSchema>;
