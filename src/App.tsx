import { FC } from 'react'
import DrawGraphForm from './components/DrawGraphForm'
import Graph from './components/Graph'

import './App.scss'

const App: FC = () => {
  return (
    <div className='App'>
      <DrawGraphForm />
      <Graph />
    </div>
  )
}

export default App
