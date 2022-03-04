import { createSlice } from '@reduxjs/toolkit'

export interface GraphPoints {
  x: number[],
  y: number[],
}

export interface GraphSliceState {
  x1: number,
  x2: number,
  graph1: GraphPoints,
  graph2: GraphPoints,
}

const initialState: GraphSliceState = {
  x1: 0,
  x2: 0,
  graph1: {
    x: [],
    y:[],
  },
  graph2: {
    x: [],
    y: [],
  },
}

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setGraphData: (state, { payload }: { payload: GraphSliceState }) => {
      state.x1 = payload.x1
      state.x2 = payload.x2
      state.graph1 = payload.graph1
      state.graph2 = payload.graph2
    },
  },
})

export const { setGraphData } = graphSlice.actions

export default graphSlice
