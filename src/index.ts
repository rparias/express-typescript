import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json()) // middleware to return req.body as json

const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('someone has pinged here')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
