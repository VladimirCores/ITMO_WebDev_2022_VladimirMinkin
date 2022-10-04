import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  extract: {
    include: ['src/**/*.{vue,html,js,jsx,tsx}', './**/*.html', './index.html'],
    exclude: ['node_modules', '.git'],
  },
})
