import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: 0,
  done: false,
};

const { actions, reducer } = createSlice({
  name: 'stepperReducer',
  initialState,
  reducers: {
    stepperNextStep: (state) => {
      state.current += 1;
    },
  },
});

export const {
  stepperNextStep,
} = actions;

export default reducer;
