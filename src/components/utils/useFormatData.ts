import dayjs from 'dayjs'

// date => YYYY/MM/DD HH:mm
export const formatDateToSlashWithTime = (date: Date | string): string =>
  dayjs(date).format('YYYY/MM/DD　HH:mm')

// date => YYYY/MM/DD
export const formatDateToSlash = (date: Date | string): string => dayjs(date).format('YYYY/MM/DD')
