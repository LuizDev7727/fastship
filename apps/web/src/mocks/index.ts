import { handlers } from './handlers'

export async function enableMSW() {
  // if (process.env.MODE !== 'test') {
  //   return
  // }

  //O dev está no client-side
  if (typeof window !== 'undefined') {
    const { setupWorker } = await import('msw/browser')
    const worker = setupWorker(...handlers)
    const mock = await worker.start()
    console.log('🔶 MSW initialized - Browser')
    return mock
  }

  //O dev está no server-side
  if (typeof window === 'undefined') {
    const { setupServer } = await import('msw/node')
    const server = setupServer(...handlers)
    server.listen()
    console.log('🔶 MSW initialized - Node')
    return server
  }
}
