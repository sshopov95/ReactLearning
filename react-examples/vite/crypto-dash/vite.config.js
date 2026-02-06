import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: 'build', //Сменяме output директорията при билда - ако искаме (default - dist)
    //minify: false, //Спира "мачкането" на кода в .js файла
  }
})
