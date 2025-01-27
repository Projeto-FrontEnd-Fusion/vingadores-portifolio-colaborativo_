/**
  Olá Carol! Aqui vai sua missão!

  Você deve checar se, após o botão de envio for pressionado a mensagem de sucesso/erro é exibida.
  Eu já deixei tudo certinho para simular o backend durante os testes. Nem precisa rodar o json-server

  Com a função (screen) você consegue encontrar elementos na página
  através de seus atributos (placeholder, label, etc).
  Só não dá pra encontrar por classe e id facilmente, é um pouco mais chatinho
  Mas placeholder e label é suficiente para esse desafio :)

  Ah, a label se refere ao atributo (aria-label), e não ao <label> </label> do html!

  Você consegue interagir com o formulário atráves da função (user)
  Você vai precisar do type e selectOptions

  Como demora um pouquinho pra ele interagir, você precisa do (await) na frente
  O (await) para a execução do código e espera até que a função termine de executar
  
  Por fim! Procure a mensagem de sucesso/erro na página e se certifique que ele está visivel
  Algo como: (expect(....).toBeVisible())

  Boa sorte!!
 */
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AxiosMockAdapter from "axios-mock-adapter";
import React from "react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { usersInstance } from "../../api/axiosInstance";
import Forms from "./Forms";

describe("<Forms />", () => {
  beforeEach(() => {
    render(<Forms />);
  });
  afterEach(cleanup);
  /*
  test("deve mostrar mensagem de sucesso se a requisição for bem-sucedida", async () => {
    const mock = new AxiosMockAdapter(usersInstance);
    mock.onPost("/users").reply(200);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Nome"), "Caroline");
    await user.type(screen.getByLabelText("Sobrenome"), "Moraes");
    await user.type(
      screen.getByPlaceholderText("E-mail"),
      "caroline@example.com"
    );

    const select = screen.getByLabelText("Vaga desejada");
    await user.selectOptions(select, "Desenvolvedor Frontend");

    await user.type(screen.getByLabelText("Conte-nos sobre você"), "Descrição");

    await user.click(
      screen.getByText(/Enviar formulário/i, { selector: "button" })
    );

    const successMessage = await screen.findByText(
      "Seja bem-vindo(a) à Comunidade Frontend Fusion!\n Cheque sua caixa de entrada para validar seu email."
    );

    expect(successMessage).toBeVisible(); 
  });
  */

  test("deve mostrar mensagem de erro se a requisição for mal sucedida", async () => {
    const mock = new AxiosMockAdapter(usersInstance);
    mock.onPost("/users").reply(404);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText("Nome"), "Caroline");
    await user.type(screen.getByLabelText("Sobrenome"), "Moraes");
    await user.type(screen.getByLabelText("E-mail"), "caroline@example.com");

    const select = screen.getByLabelText("Vaga desejada");
    await user.selectOptions(select, "Desenvolvedor Frontend");

    await user.type(screen.getByLabelText("Conte-nos sobre você"), "Descrição");

    await user.click(screen.getByRole("button", { name: "Enviar formulário" }));
    screen.debug();

    const errorMessage = await screen.findByText("Oops, ocorreu um erro.");
    expect(errorMessage).toBeVisible();
  });
});
