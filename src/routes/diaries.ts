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

router.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default router
