import {configureStore} from "@reduxjs/toolkit";
import permissionReducer from "./permissionSlice"

export const store = configureStore({
  reducer: {
    permissions: permissionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch