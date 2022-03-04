import { ChangeEvent, FC, FormEvent, useCallback } from 'react'
import { Button, InputAdornment } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../..'
import { GraphNames, setField } from '../../redux/drawGraphFormSlice'
import Input from './Input'
import { setGraphData } from '../../redux/graphSlice'
import getGraphPoints from './getGraphPoints'

import './DrawGraphForm.scss'

const DrawGraphForm: FC  = () => {
  const { y1, y2, x1, x2 } = useSelector((state: RootState) => state.drawGraphForm)
  const dispatch = useDispatch()

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({
      field: (e.target.dataset.graphName as GraphNames),
      value: e.target.value,
    }))
  }, [])

  const onDrawGraph = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setGraphData({
      x1: +x1, 
      x2: +x2,
      graph1: getGraphPoints(y1, +x1, +x2),
      graph2: getGraphPoints(y2, +x1, +x2),
    }))
  }, [x1, x2, y1, y2])

  return (
    <form className='DrawGraphForm container' onSubmit={onDrawGraph}>
      <div className='DrawGraphForm-inputs'>
        <div className='DrawGraphForm-inputs-y'>
          <Input
            variant='outlined' 
            value={y1}
            graphName='y1'
            onChange={onChangeValue}
            InputProps={{
              startAdornment: <InputAdornment position='start'>f(x) =</InputAdornment>
            }}
          />
          <Input
            variant='outlined' 
            value={y2}
            graphName='y2'
            onChange={onChangeValue}
            InputProps={{
              startAdornment: <InputAdornment position='start'>f(x) =</InputAdornment>
            }}
          />
        </div>
        <div className='DrawGraphForm-inputs-x'>
          <Input
            type='number'
            variant='outlined' 
            value={x1}
            graphName='x1'
            onChange={onChangeValue}
            InputProps={{
              startAdornment: <InputAdornment position='start'>x =</InputAdornment>
            }}
          />
          <Input
            type='number'
            variant='outlined' 
            value={x2}
            graphName='x2'
            onChange={onChangeValue}
            InputProps={{
              startAdornment: <InputAdornment position='start'>x =</InputAdornment>
            }}
          />
        </div>
      </div>
      <div className='DrawGraphForm-btn'>
        <Button 
          color='primary' 
          variant='contained' 
          type='submit'
        >Draw</Button>
      </div>
    </form>
  )
}

export default DrawGraphForm
