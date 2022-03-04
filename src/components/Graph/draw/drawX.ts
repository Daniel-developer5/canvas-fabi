import canvasConfig from './canvasConfig'
import colors from './colors'
import getCanvasCoord from './getCanvasCoord'

const drawX = (
  x: number, color: string, $: CanvasRenderingContext2D
): void => {
  const xCoord = getCanvasCoord('x', x)

  $.strokeStyle = color
  $.beginPath()
  $.moveTo(xCoord, 0)
  $.lineTo(xCoord, canvasConfig.config.height)
  $.stroke()
  $.closePath()
  $.strokeStyle = colors.DEFAULT
}

export default drawX
