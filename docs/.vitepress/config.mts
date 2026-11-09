import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress/',
  lang: 'pt_BR',
  title: "CARDIO",
  description: "Um repositório para a implementação do projeto CARDIO no seu território",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Início', link: '/' }
    ],

    sidebar: [
      {
        text: 'Protocolos',
        items: [
          { text: 'Protocolo Clínico CARDIO', link: '/protocolos/Protocolo_Clinico' },
          { text: 'Protocolo de Linha de Cuidado', link: '/protocolos/Protocolo_Linha_de_Cuidado' }
        ]
      },
      {
        text: 'Soluções CARDIO',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: {
      label: 'Nesta página'
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Aparência',
    lightModeSwitchTitle: 'Mudar para modo claro',
    darkModeSwitchTitle: 'Mudar para modo escuro',
    skipToContentLabel: 'Pular para o conteúdo',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Pesquisar',
            buttonAriaLabel: 'Pesquisar'
          },
          modal: {
            displayDetails: 'Mostrar detalhes',
            resetButtonTitle: 'Limpar pesquisa',
            backButtonTitle: 'Voltar',
            noResultsText: 'Nenhum resultado para',
            footer: {
              selectText: 'selecionar',
              selectKeyAriaLabel: 'enter',
              navigateText: 'navegar',
              navigateUpKeyAriaLabel: 'seta para cima',
              navigateDownKeyAriaLabel: 'seta para baixo',
              closeText: 'fechar',
              closeKeyAriaLabel: 'esc'
            }
          }
        }
      }
    }
  }
})
