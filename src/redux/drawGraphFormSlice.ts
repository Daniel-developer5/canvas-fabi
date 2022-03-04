import { createSlice } from '@reduxjs/toolkit'

export interface DrawGraphFormSliceState {
  y1: string,
  y2: string,
  x1: string,
  x2: string,
}

export type GraphNames = 'y1' | 'y2' | 'x1' | 'x2'

const initialState: DrawGraphFormSliceState = {
  y1: '',
  y2: '',
  x1: '',
  x2: '',
}

interface SetFieldPayload {
  payload: {
    field: GraphNames,
    value: string,
  },
}

const drawGraphFormSlice = createSlice({
  name: 'drawGraphForm',
  initialState,
  reducers: {
    setField: (state, { payload }: SetFieldPayload) => {
      state[payload.field] = payload.value
    },
  },
})

export const { setField } = drawGraphFormSlice.actions

export default drawGraphFormSlice
