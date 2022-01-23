import { CategoryType } from '@/src/types/index'

export const sortItems = [
  {
    value: 'createdAtDESC',
    label: '新着順',
  },
  {
    value: 'titleDESC',
    label: 'タイトル降順',
  },
  {
    value: 'titleASC',
    label: 'タイトル昇順',
  },
]

export const filtersItemByCategory = (categories: CategoryType[]) => [
  { value: '', label: '全てのカテゴリー' },
  ...categories.map((category) => ({
    value: category.id,
    label: category.name,
  })),
]


