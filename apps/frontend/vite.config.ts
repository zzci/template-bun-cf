import devServer from '@hono/vite-dev-server'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

const config = defineConfig({
  plugins: [
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    viteReact(),
    devServer({
      entry: '../api/src/index.ts',
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true as const,
  },
})

export default config
