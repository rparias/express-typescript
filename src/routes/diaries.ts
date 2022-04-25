import express from 'express'
import * as diaryService from '../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntries())
})

router.get('/sensible', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default router
