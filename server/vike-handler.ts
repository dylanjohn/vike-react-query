/// <reference lib="webworker" />
import { renderPage } from 'vike/server'
import type { Get, UniversalHandler } from '@universal-middleware/core'

export const vikeHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  const pageContextInit = { ...context, ...runtime, urlOriginal: request.url, headersOriginal: request.headers }
  const pageContext = await renderPage(pageContextInit)
  const response = pageContext.httpResponse

  if (!response) {
    throw new Error('No response returned by Vike')
  }

  return new Response(response.getReadableWebStream(), {
    status: response.statusCode,
    headers: response.headers
  })
}
