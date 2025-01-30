import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  json: {
    stringify: true, // Allows JSON imports
  },
  base: "/portfolio-abi/",
})
