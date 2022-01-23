import { selectItem, selectProps } from '@/src/types'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useEffect, useState } from 'react'

export const BaseSelect = ({ handleChange, items, }: selectProps) => {
  const [isSelected, setIsSelected] = useState<string>('')
  useEffect(() => {
    if (items.length && isSelected === '') {
      setIsSelected(items[0].value)
    }
  }, [items, isSelected])

  const handleSelected = (event: SelectChangeEvent) => {
    setIsSelected(event.target.value)
    handleChange(event)
  }
  return (
    <FormControl fullWidth sx={{ maxWidth: 180, height: 40 }}>
      <Select
        onChange={(event: SelectChangeEvent) => handleSelected(event)}
        displayEmpty
        value={isSelected}
      >
        {items?.map((item: selectItem, index: number) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default BaseSelect
