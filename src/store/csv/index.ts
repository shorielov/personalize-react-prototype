import { createSlice, Dispatch } from '@reduxjs/toolkit';

import getCSVData from '../../services/getCSVData';

const initialState = {
  data: [],
  fetchingState: 'none',
  creatingState: 'none',
  loadingState: 'none',
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'csv',
  initialState,
  reducers: {
    csvDataFetching: (state) => {
      state.fetchingState = 'requesting';
    },
    csvDataFetched: (state, action) => {
      state.data = action.payload.data;
      state.fetchingState = 'success';
    },
    csvFetchingError: (state, action) => {
      state.fetchingState = 'failed';
      state.error = action.payload.error;
    },
  },
});

export const {
  csvDataFetching,
  csvDataFetched,
  csvFetchingError,
} = actions;

export const fetchCSVData = () => (dispatch: Dispatch) => {
  dispatch(csvDataFetching());
  return getCSVData()
    .then((data) => dispatch(csvDataFetched({ data })))
    .catch((error) => {
      error.clientMessage = "Can't get product releases";
      dispatch(csvFetchingError({ error }));
    });
 };

export default reducer;
