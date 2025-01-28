import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AxiosMockAdapter from "axios-mock-adapter";
import React from "react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { usersInstance } from "../../api/axiosInstance";
import Forms from "./Forms";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe("<Forms />", () => {
  let user = userEvent.setup();

  beforeEach(async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Forms />
      </QueryClientProvider>
    );

    await user.type(screen.getByLabelText("Nome"), "Caroline");
    await user.type(screen.getByLabelText("Sobrenome"), "Moraes");
    await user.type(
      screen.getByPlaceholderText("E-mail"),
      "caroline@example.com"
    );

    const select = screen.getByLabelText("Vaga desejada");
    await user.selectOptions(select, "Desenvolvedor Frontend");

    await user.type(screen.getByLabelText("Conte-nos sobre você"), "Desenvolvedora Frontend, membra da Squad Vingadores na Comunidade Frontend Fusion");
  });

  test("deve mostrar mensagem de sucesso se a requisição for bem-sucedida", async () => {
    const mock = new AxiosMockAdapter(usersInstance);
    mock.onPost("/users").reply(200);

    await user.click(
      screen.getByText("Enviar formulário")
    );

    const successMessage = await screen.findByText(
      "Seja bem-vindo(a) à Comunidade Frontend Fusion! Cheque sua caixa de entrada para validar seu email."
    );

    expect(successMessage).toBeVisible();
  });

  test("deve mostrar mensagem de erro se a requisição for mal sucedida", async () => {
    const mock = new AxiosMockAdapter(usersInstance);
    mock.onPost("/users").reply(404);

    await user.click(screen.getByRole("button", { name: "Enviar formulário" }));

    const errorMessage = await screen.findByText("Oops, ocorreu um erro. Tente novamente!");
    expect(errorMessage).toBeVisible()
  });
});
