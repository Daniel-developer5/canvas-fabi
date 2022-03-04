import { FC, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../..'
import Graphic from './draw'
import { Button } from '@material-ui/core'

import './Graph.scss'

const Graph: FC = () => {
  const graphRef = useRef<HTMLCanvasElement>(null)
  const graphState = useSelector((state: RootState) => state.graph)
  const graphic = new Graphic()

  useEffect(() => {
    if (graphState.graph1.x.length) {
      graphic.init({
        canvas: graphRef.current,
        ...graphState
      })

      graphic.draw()
    }
  }, [graphState])

  return (
    <div className='graph-box'>
      <div className='Graph'>
        <div className="Graph-buttons">
          <Button
            variant='contained'
            color='primary'
            onClick={() => graphic.resize('+')}
          >+</Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => graphic.resize('-')}
          >-</Button>
        </div>
        <canvas
          ref={graphRef}
          width='700'
          height='500'
          className='Graph-area'
        />
      </div>
    </div>
  )
}

export default Graph
