import {configureStore} from "@reduxjs/toolkit";
import permissionReducer from "./permissionSlice"
import cameraReducer from "./cameraSlice"

export const store = configureStore({
  reducer: {
    permissions: permissionReducer,
    camera: cameraReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch