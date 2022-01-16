import styles from './Select.module.scss'
import { selectItem, selectProps } from '@/src/types'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

export const BaseSelect = ({ handleChange, items }: selectProps) => {
  const [isSelected, setIsSelected] = useState<string>(items[0].value)
  const handleSelected = (event: SelectChangeEvent) => {
    setIsSelected(event.target.value)
    handleChange(event)
  }
  return (
    <FormControl sx={{ width: 120, height: 40 }}>
      <Select
        onChange={(event: SelectChangeEvent) => handleSelected(event)}
        displayEmpty
        value={isSelected}
      >
        {items?.map((item: selectItem, index: number) => (
          <MenuItem key={index} value={item.value} className={styles.option}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default BaseSelect
