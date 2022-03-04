import { GraphPoints } from '../../redux/graphSlice'
import { evaluate } from 'mathjs'

const getGraphPoints = (expression: string, xMin: number, xMax: number): GraphPoints => {
  const controlPoint = Math.max(Math.abs(xMin), Math.abs(xMax))
  
  // Points Amount: (controlPoint + 2) * 10 + 1 = controlPoint * 20 + 21                    

  const xPoints: number[] = Array(controlPoint * 20 + 21)
    .fill(0)
    .map((_, i) => -controlPoint - 1 + +(0.1 * i).toFixed(1))
  
  const yPoints = xPoints.map(x => (
    evaluate(expression.replace(/x/g, `(${x})`))
  ))

  return {
    x: xPoints,
    y: yPoints,
  }
}

export default getGraphPoints
