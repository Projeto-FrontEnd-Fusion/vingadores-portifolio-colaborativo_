import React from 'react'
import { describe, test, beforeEach, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MemberCarousel from './MemberCarousel'
import { membersInstance } from '../../api/axiosInstance'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AxiosMockAdapter from "axios-mock-adapter";
import axios from 'axios'

describe('<MemberCarousel />', () => {
  const members =
    [
      {
        id: "4c2f4c1d-5b6e-4978-9a3c-1d2e8f4g6h9k",
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
        projects: [
          {
            id: "a1b2c3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6",
            project_cover: "https://woovina.com/images/2023/11/14/bugmart-cover.png",
            project_name: "Bugmart",
            description: "Bugmart is a complete eCommerce website template built with WordPress, WooCommerce, Elementor, and WooVina theme. With beautiful design, fast loading, SEO friendly, and easy to customize, it's a good template for bookstore, and bookshop.",
            technologies: [
              "Java",
              "JavaScript",
              "Python"
            ],
            projectUrl: "https://example.com"
          },
          {
            id: "2e8d7c6b-5a4d-3f2e-1d0c-9b8a7f6e5d7f",
            project_cover: "https://woovina.com/images/2022/05/02/digita-cover.png",
            project_name: "Digita",
            description: "Digita is a complete eCommerce website template built with WordPress, WooCommerce, Elementor, and WooVina theme. This template will be a perfect choice for online eCommerce stores like electronic stores, computer stores, mobile stores, watch stores, digital stores, and multipurpose online stores.",
            technologies: [
              "Java",
              "JavaScript",
              "Python"
            ],
            projectUrl: "https://example.com"
          }
        ],
        soft_skills: [
          "Communication",
          "Teamwork"
        ]
      },
      {
        id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        name: "Caroline de Moraes",
        profile_image: "https://github.com/carolinedemoraes.png",
        stack: "Desenvolvedor(a) Frontend",
        community_level: "Code Wizard",
        professional_profile_url: [
          {
            platform: "github",
            url: "https://github.com/carolinedemoraes"
          },
          {
            platform: "linkedin",
            url: "https://www.linkedin.com/in/carolinemmoraes"
          }
        ],
        skills: [
          "typescript",
          "react",
          "tailwindcss",
          "redux",
          "jest"
        ],
        projects: [
          {
            id: "d1e2f3a4-5b6c-7d8e-9f0a-b1c2d3e4f5g6",
            project_cover: "https://woovina.com/images/2024/07/15/sound-cover.png",
            project_name: "Sound",
            description: "Sound is a sleek, professional template for audio equipment stores. Featuring a modern design, user-friendly interface, and SEO optimization, it ensures your products are showcased attractively. With built-in sales management tools and device compatibility, Sound is the ideal choice to elevate your brand and increase sales.",
            technologies: [
              "Java",
              "JavaScript",
              "Python"
            ],
            projectUrl: "https://example.com"
          },
          {
            id: "c3d4e5f6-a7b8-9c0d-e1f2-3g4h5i6j7k8l",
            project_cover: "https://woovina.com/images/2024/03/14/ewear-cover.png",
            project_name: "Ewear",
            description: "Ewear is a lingerie and innerwear website template built on WordPress, WooCommerce, Elementor, and the Woovina theme. With fast loading speeds, mobile-friendly design, and easy customization, Ewear is the ideal choice for those looking to start an online business in this niche.",
            technologies: [
              "Java",
              "JavaScript",
              "Python"
            ],
            projectUrl: "https://example.com"
          }
        ],
        soft_skills: [
          "Communication",
          "Teamwork"
        ]
      },
    ]

  test('deve renderizar cards de todos os membros com nomes visiveis', async () => {
    const mock = new AxiosMockAdapter(membersInstance);
    mock.onGet("/members").reply(200, [
      ...members
    ]);

    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemberCarousel />
      </QueryClientProvider>
    )

    const breno = await screen.findByText('Breno Mateus')
    const carol = await screen.findByText('Caroline de Moraes')
    expect(breno).toBeVisible()
    expect(carol).toBeVisible()
  })
})
