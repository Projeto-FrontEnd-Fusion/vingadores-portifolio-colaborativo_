import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MemberCard from './MemberCard'

describe('<MemberCard />', () => {
  const memberData = {
    name: "Breno Mateus",
    profile_image: "https://github.com/Breno-Mateus.png",
    stack: "Desenvolvedor(a) Frontend",
    community_level: "Code Wizard",
    professional_profile_url: [
      {
        platform: "github",
        url: "https://github.com/Breno-Mateus"
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/breno-mateus-8b9a99211/"
      }
    ],
    skills: [
      "typescript",
      "react",
      "tailwindcss",
      "axios",
      "redux"
    ],
  };

  test('deve renderizar apenas foto, nome e função se não estiver ativo', () => {
    render(<MemberCard member={memberData} isActive={false} />)

    const name = screen.getByText('Breno Mateus')
    const stack = screen.getByText('Desenvolvedor(a) Frontend')
    const photo = screen.getByAltText('Foto de Breno Mateus')
    const skill = screen.queryByLabelText('typescript')
    const github = screen.queryByLabelText('github')

    expect(skill).toBeNull()
    expect(github).toBeNull()

    expect(name).toBeVisible()
    expect(stack).toBeVisible()
    expect(photo).toBeVisible()
  })

  test('deve renderizar todos os dados se estiver ativo', () => {
    render(<MemberCard member={memberData} isActive={false} />)

    const name = screen.getByText('Breno Mateus')
    const stack = screen.getByText('Desenvolvedor(a) Frontend')
    const photo = screen.getByAltText('Foto de Breno Mateus')
    const skill = screen.queryByLabelText('typescript')
    const github = screen.queryByLabelText('github')

    expect(skill).toBeDefined()
    expect(github).toBeDefined()
    expect(name).toBeVisible()
    expect(stack).toBeVisible()
    expect(photo).toBeVisible()
  })
})
