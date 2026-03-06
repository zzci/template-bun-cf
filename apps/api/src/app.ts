import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

export type Env = {
  Bindings: {
    // Add your bindings here, e.g.:
    // DB: D1Database
    // KV: KVNamespace
  }
}

const app = new Hono<Env>()

app.use('*', logger())
app.use('*', cors())

app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: Date.now() })
})

export default app
