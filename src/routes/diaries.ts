import express from 'express'
import * as diaryService from '../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntries())
})

router.get('/sensible', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findDiaryById(Number(req.params.id))
  return diary != null ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryService.addDiary({
    date,
    weather,
    visibility,
    comment,
  })

  res.send(newDiaryEntry)
})

export default router
