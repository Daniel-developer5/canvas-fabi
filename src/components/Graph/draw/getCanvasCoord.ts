import canvasConfig from './canvasConfig'

const getCanvasCoord = (axis: 'x' | 'y', coord: number): number => {
  const { width, height, singleSegment } = canvasConfig.config
  const isX = axis === 'x'

  return (isX ? width : height) / 2 + (isX ? coord : -coord) * singleSegment
}

export default getCanvasCoord
