import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Agent-Engineering-101/',
  plugins: [react(), tailwindcss()],
})
