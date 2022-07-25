import type { JSXIdentifier, JSXMemberExpression } from '@babel/types'

export function parseJSXIdentifier(name: JSXIdentifier | JSXMemberExpression) {
  if (name.type === 'JSXIdentifier')
    return name.name

  else
    return `${parseJSXIdentifier(name.object)}.${parseJSXIdentifier(name.property)}`
}

/**
 * Because win platform path scheme is D:/xxx
 * So if we wanna get the col and row number, cannot just `const [fileName, col, row] = filePath.split(':')`
 * We can use split, and the last two are col and row, then splice rest part
 *
 * @param {string} filePath full filePath including filename col and row
 * @return {[string, string, string]} [fileName, row, col]
 */
export function parseFilePath(filePath: string): [string, string, string] {
  const splitPath = filePath.split(':')
  const fileName = splitPath.splice(0, splitPath.length - 2).join(':')
  const row = splitPath[splitPath.length - 2]
  const col = splitPath[splitPath.length - 1]
  return [fileName, row, col]
}
