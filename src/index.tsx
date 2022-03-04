import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import drawGraphFormSlice from './redux/drawGraphFormSlice'
import { Provider } from 'react-redux'
import graphSlice from './redux/graphSlice'

const store = configureStore({
  reducer: combineReducers({
    drawGraphForm: drawGraphFormSlice.reducer,
    graph: graphSlice.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
