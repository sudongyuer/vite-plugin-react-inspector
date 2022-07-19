import type { JSXIdentifier, JSXMemberExpression } from '@babel/types'

export function parseJSXIdentifier(name: JSXIdentifier | JSXMemberExpression) {
  if (name.type === 'JSXIdentifier')
    return name.name

  else
    return `${parseJSXIdentifier(name.object)}.${parseJSXIdentifier(name.property)}`
}
