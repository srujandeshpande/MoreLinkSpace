import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import linkReducer from './linkSlice';

export default configureStore({
  reducer: {
    link: linkReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these paths in the state
      ignoredPaths: ['link.user'],
      ignoredActions: ['link/changeUser'],
    }
  }),
});
