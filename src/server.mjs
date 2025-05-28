import express from 'express'
import router from './routes/index.mjs'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.mjs'
import { logRequests } from './middleware/logRequests.mjs'

const app = express()
const PORT = 3000

app.set('views', './src/views')

app.use(express.json())

app.use(logRequests)

app.use(router)

app.use(notFoundHandler)
app.use(errorHandler)

const server = app.listen(PORT, () => {
    console.log(`Сервер запущений за адресою http://localhost:${PORT}`)
})

export { server, app };
