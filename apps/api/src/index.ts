import { Hono } from 'hono'
import { Bindings } from './types'

const app = new Hono<{ Bindings: Bindings }>({ strict: false })

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
