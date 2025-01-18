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
import React from 'react'
import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Forms from './Forms'
import AxiosMockAdapter from 'axios-mock-adapter'
import { usersInstance } from '../../api/axiosInstance'

describe('<Forms />', () => {
  beforeEach(() => {
    render(<Forms />)
  })

  test('deve mostrar mensagem de sucesso se a requisição for bem sucedida', async () => {
    const mock = new AxiosMockAdapter(usersInstance);
    mock.onPost("/users").reply(404)

    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Nome'), 'Caroline')
    // Ache os elementos do formulário e preencha-o
    // Aperte o botão de envio
    // Ache a mensagem de sucesso
  })

  test('deve mostrar mensagem de erro se a requisição for mal sucedida', async () => {
    const mock = new AxiosMockAdapter(usersInstance);
    mock.onPost("/users").reply(404)

    const user = userEvent.setup()
    await user.type(screen.getByPlaceholderText('Nome'), 'Caroline')
    // Ache os elementos do formulário e preencha-o
    // Aperte o botão de envio
    // Ache a mensagem de erro
  })
})
