import { GraphPoints } from '../../../redux/graphSlice'
import colors from './colors'
import getCanvasCoord from './getCanvasCoord'

const drawGraph = (
  coords: GraphPoints, color: string, $: CanvasRenderingContext2D
): void => {
  $.strokeStyle = color

  coords.x.forEach((coord, index) => {
    $.beginPath()
    $.moveTo(
      getCanvasCoord('x', coord),
      getCanvasCoord('y', coords.y[index])
    )
    $.lineTo(
      getCanvasCoord('x', coords.x[index + 1]),
      getCanvasCoord('y', coords.y[index + 1])
    )
    $.stroke()
  })
  
  $.closePath()
  $.strokeStyle = colors.DEFAULT
}

export default drawGraph
