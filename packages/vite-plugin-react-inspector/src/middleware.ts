import type { Connect } from 'vite'
export const SERVER_URL = '/__react-inspector-launch-editor'

type RequestMessage = Parameters<Connect.NextHandleFunction>[0]
export const queryParserMiddleware: Connect.NextHandleFunction = (
  req: RequestMessage & { query?: object },
  _,
  next,
) => {
  if (!req.query && req.url?.startsWith(SERVER_URL)) {
    const url = new URL(req.url, 'http://domain.inspector')
    req.query = Object.fromEntries(url.searchParams.entries())
  }
  next()
}
