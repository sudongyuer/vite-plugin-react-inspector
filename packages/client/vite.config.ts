import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import HotExport from 'vite-plugin-hot-export'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [HotExport(), Inspect(), react(), svgr({
    svgrOptions: {
      icon: true,
      // ...svgr options (https://react-svgr.com/docs/options/)
    },
  })],
},
)
