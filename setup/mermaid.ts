import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  const nord1Color = '#3B4252'
  const nord3Color = '#4C566A'
  return {
    theme: 'dark',
    themeVariables: {
      primaryColor: nord3Color,
      mainBkg: nord3Color,
      lineColor: nord1Color
    }
  }
})