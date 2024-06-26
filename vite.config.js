import { defineConfig } from 'vite'
import path from "path"
import createVitePlugins from './vite/index'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: createVitePlugins(command === 'build'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})


