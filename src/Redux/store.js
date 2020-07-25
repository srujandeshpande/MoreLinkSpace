import { configureStore } from '@reduxjs/toolkit';
import linkReducer from './linkSlice';

export default configureStore({
  reducer: {
    link: linkReducer,
  },
});
