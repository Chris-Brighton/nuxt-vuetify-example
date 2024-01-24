// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import '@/assets/main.scss'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'akero',
      themes: {
        akero: {
          dark: false,
          colors: {
            primary: '#466FD1',
            secondary: '#9146BF',
            info: '#BAC6F0',
            success: '#3BA649',
            warning: '#D3980E',
            error: '#D65364'
          }
        }
      }
    },
  })
  app.vueApp.use(vuetify)
})
