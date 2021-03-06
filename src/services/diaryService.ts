import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
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

export const findDiaryById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const diary = diaries.find((diary) => diary.id === id)
  if (diary != null) {
    const { comment, ...restOfDiary } = diary
    return restOfDiary
  }

  return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const diaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry,
  }

  diaries.push(diaryEntry)

  return diaryEntry
}
