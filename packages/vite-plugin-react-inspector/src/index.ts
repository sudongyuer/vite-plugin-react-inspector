import type { Plugin } from 'vite'
import { parseSync, traverse } from '@babel/core'
import MagicString from 'magic-string'
import { parseJSXIdentifier } from './utils'
import { launchEditor } from './launch-editor'
function VitePluginReactInspector(): Plugin {
  return {
    name: 'vite-plugin-react-inspector',
    enforce: 'pre',
    apply: 'serve',
    transform: (code, id) => {
      if (id.endsWith('.tsx')) {
        const transformedCode = code
        const s = new MagicString(transformedCode)
        const ast = parseSync(code, {
          filename: id,
          ast: true,
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        })
        traverse(ast, {
          enter({ node }) {
            if (node.type === 'JSXElement') {
              const { start } = node
              const { column, line } = node?.loc?.start as any
              const toInsertPosition = start + parseJSXIdentifier(node.openingElement.name as any).length + 1
              const content = ` data-react-inspector="${id}:${line}:${column}"`
              s.appendLeft(toInsertPosition, content)
            }
          },
        })
        const sourceMap = s.generateMap({
          source: id,
          includeContent: true,
        })
        return {
          code: s.toString(),
          map: sourceMap,
        }
      }
    },

  }
}

export default VitePluginReactInspector
