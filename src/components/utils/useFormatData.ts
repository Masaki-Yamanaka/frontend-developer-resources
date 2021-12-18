import dayjs from 'dayjs'

// date => YYYY/MM/DD HH:mm
export const formatDateToSlashWithTime = (date: Date): string => dayjs(date).format('YYYY/MM/DD　HH:mm')



