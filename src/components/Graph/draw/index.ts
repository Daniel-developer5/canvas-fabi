import { GraphPoints } from '../../../redux/graphSlice'
import canvasConfig from './canvasConfig'
import colors from './colors'
import drawCoordinateArea from './drawCoordinateArea'
import drawGraph from './drawGraph'
import drawX from './drawX'

interface DrawParams {
  canvas: HTMLCanvasElement | null,
  x1: number,
  x2: number,
  graph1: GraphPoints,
  graph2: GraphPoints,
}

interface CanvasOptions {
  $: CanvasRenderingContext2D | null,
  width: number,
  height: number,
}

class Graphic {
  state: DrawParams = {
    canvas: null,
    x1: 0,
    x2: 0,
    graph1: {
      x: [], y: [],
    },
    graph2: {
      x: [], y: [],
    },
  }

  init = (drawParams: DrawParams) => {
    this.state = drawParams
  }

  _getCanvasOptions = (): CanvasOptions => ({
    $: this.state.canvas?.getContext('2d') || null,
    width: this.state.canvas?.offsetWidth || 0,
    height: this.state.canvas?.offsetHeight || 0,
  })

  draw = (singleSegment = 15): void => {
    const { x1, x2, graph1, graph2 } = this.state
    
    const { $, width, height } = this._getCanvasOptions()
  
    if (!$) {
      return
    }
  
    canvasConfig.setCanvasConfig({
      width, height, singleSegment,
    })
  
    drawCoordinateArea($, width, height)
  
    $.lineWidth = 2
  
    drawX(x1, colors.GREEN, $)
    drawX(x2, colors.RED, $)
    drawGraph(graph1, colors.BLUE, $)
    drawGraph(graph2, colors.PURPLE, $)
  }

  clear = (): void => {
    const { $, width, height } = this._getCanvasOptions()
    
    if (!$) {
      return
    }

    $.clearRect(0, 0, width, height)
  }

  resize = (direction: '+' | '-'): void => {
    this.clear()
    
    const newSingleSegment = canvasConfig.config.singleSegment + (direction === '+' ? 3 : -3)

    if (newSingleSegment > 0) {
      this.draw(newSingleSegment)
    } else {
      this.draw(0.1)
    }
  }
}

export default Graphic
