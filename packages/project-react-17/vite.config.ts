import { defineConfig } from 'vite'
import HotExport from 'vite-plugin-hot-export'
import react from '@vitejs/plugin-react'
import ReactInspector from 'vite-plugin-react-inspector'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactInspector(), react(), HotExport(), svgr({
    svgrOptions: {
      icon: true,
      // ...svgr options (https://react-svgr.com/docs/options/)
    },
  })],
},
)
