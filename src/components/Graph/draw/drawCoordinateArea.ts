interface DrawAxisParams {
  start: { x: number, y: number, },
  end: { x: number, y: number, },
}

const drawCoordinateArea = ($: CanvasRenderingContext2D, width: number, height: number): void => {
  const drawAxis = ({ start, end }: DrawAxisParams): void => {
    $.beginPath()
    $.moveTo(start.x, start.y)
    $.lineTo(end.x, end.y)
    $.stroke()
    $.closePath()
  }
  
  const drawOrdinate = (): void => {
    drawAxis({
      start: { x: width / 2, y: 0, },
      end: { x: width / 2, y: height, },
    })
  }

  const drawAbscissa = (): void => {
    drawAxis({
      start: { x: 0, y: height / 2, },
      end: { x: width, y: height / 2, },
    })
  }

  drawOrdinate()
  drawAbscissa()
}

export default drawCoordinateArea
