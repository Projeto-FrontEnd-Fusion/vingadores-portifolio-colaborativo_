import React from 'react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import MemberProjects from './MemberProjects'
import { useMemberStore } from '../../store/useMemberStore'

describe('<MemberProjects />', () => {
  const store = vi.hoisted(() => {
    return {
      useMemberStore: vi.fn()
    }
  })

  vi.mock('../../store/useMemberStore.ts', () => {
    return {
      useMemberStore: store.useMemberStore
    }
  })

  test('deve estar invisível se o selectedMember é nulo', async () => {
    store.useMemberStore.mockReturnValue(null)

    const { container } = render(<MemberProjects />)

    expect(container.firstElementChild?.classList.contains('opacity-0')).toBe(true)
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })

  test('deve estar visível se houver um membro selecionado', async () => {
    store.useMemberStore.mockReturnValue(
      {
        "id": "4c2f4c1d-5b6e-4978-9a3c-1d2e8f4g6h9k",
        "name": "Breno Mateus",
        "profile_image": "https://github.com/Breno-Mateus.png",
        "stack": "Desenvolvedor(a) Frontend",
        "community_level": "Code Wizard",
        "professional_profile_url": [
          {
            "platform": "github",
            "url": "https://github.com/Breno-Mateus"
          },
          {
            "platform": "linkedin",
            "url": "https://www.linkedin.com/in/breno-mateus-8b9a99211/"
          }
        ],
        "skills": [
          "typescript",
          "react",
          "tailwindcss",
          "axios",
          "redux"
        ],
        "projects": [
          {
            "id": "5299c19a-797b-4cd2-8611-4e19a8c59bb1",
            "project_cover": "https://woovina.com/images/2023/11/14/bugmart-cover.png",
            "project_name": "Bugmart",
            "description": "Bugmart is a complete eCommerce website template built with WordPress, WooCommerce, Elementor, and WooVina theme. With beautiful design, fast loading, SEO friendly, and easy to customize, it's a good template for bookstore, and bookshop.",
            "technologies": [
              "Java",
              "JavaScript",
              "Python"
            ],
            "project_url": "https://example.com"
          },
          {
            "id": "d0bb631e-4cc8-4677-8e1a-9bd3b836bdef",
            "project_cover": "https://woovina.com/images/2022/05/02/digita-cover.png",
            "project_name": "Digita",
            "description": "Digita is a complete eCommerce website template built with WordPress, WooCommerce, Elementor, and WooVina theme. This template will be a perfect choice for online eCommerce stores like electronic stores, computer stores, mobile stores, watch stores, digital stores, and multipurpose online stores.",
            "technologies": [
              "Java",
              "JavaScript",
              "Python"
            ],
            "project_url": "https://example.com"
          }
        ],
        "soft_skills": [
          "Communication",
          "Teamwork"
        ]
      }
    )

    render(<MemberProjects />)
    const projeto = await screen.findByText('Bugmart')

    expect(projeto).toBeVisible()
  })

})
