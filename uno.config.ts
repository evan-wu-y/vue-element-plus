import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetAttributify(),
    presetIcons({
      // scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: 'var(--ep-color-primary)',
      success: 'var(--ep-color-success)',
      warning: 'var(--ep-color-warning)',
      danger: 'var(--ep-color-danger)',
      info: 'var(--ep-color-info)',
      text: {
        primary: 'var(--ep-text-color-primary)',
        regular: 'var(--ep-text-color-regular)',
        secondary: 'var(--ep-text-color-secondary)',
      },
      bg: {
        base: 'var(--ep-bg-color)',
        page: 'var(--ep-bg-color-page)',
      },
      border: 'var(--ep-border-color)',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    // fontFamily: {
    //   sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Microsoft YaHei", sans-serif',
    // },
  },
  shortcuts: {
    'base-text': 'text-text-regular leading-relaxed',
    'page-container': 'max-w-7xl mx-auto px-md',
    card: 'rounded-2xl shadow-sm p-md bg-bg-base',
  },
})
