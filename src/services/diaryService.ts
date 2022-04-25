import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map((diary) => ({
      id: diary.id,
      date: diary.date,
      weather: diary.weather,
      visibility: diary.visibility,
    }))
  }

export const addEntry = (): undefined => undefined
