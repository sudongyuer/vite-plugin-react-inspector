import type { Plugin } from 'vite'

function VitePluginReactInspector(): Plugin {
  return {
    name: 'vite-plugin-react-inspector',
    apply: 'serve',
  }
}

export default VitePluginReactInspector
