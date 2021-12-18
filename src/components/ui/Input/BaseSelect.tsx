import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
type Props = {
  label: string
  selected: string
  change: (event: string) => void
  items: any[] //TODO: {id:string,name:string}[]で指定したかったが,うまく記載できなかったので、一旦any[]を使っています。後で修正します。
}

export default function SelectVariants(props: Props) {
  const [selected, setSelected] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
    props.change(event.target.value)
  }

  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id='demo-simple-select-standard-label'>{props.label}</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={selected}
          onChange={handleChange}
          label={props.label}
        >
          {props.items.map((item: any) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
