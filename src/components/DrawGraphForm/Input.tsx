import { TextFieldProps, TextField } from '@material-ui/core'
import { FC } from 'react'
import { GraphNames } from '../../redux/drawGraphFormSlice'

interface InputProps {
  graphName: GraphNames,
}

const Input: FC<InputProps & TextFieldProps> = ({ graphName, ...props }) => {
  return (
    <TextField
      inputProps={{
        'data-graph-name': graphName,
      }}
      {...props}
    />
  )
}

export default Input
