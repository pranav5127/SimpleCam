import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type PermissionStatus = "granted" | "denied" | "undetermined" | "unknown"

export interface PermissionState {
  camera: PermissionStatus
  audio: PermissionStatus
  media: PermissionStatus
}

const initialState: PermissionState = {
  camera: "unknown",
  audio: "unknown",
  media: "unknown"
}

const permissionSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setCameraPermission(state, action: PayloadAction<PermissionStatus>) {
      state.camera = action.payload
    },
    setAudioPermission(state, action: PayloadAction<PermissionStatus>) {
      state.audio = action.payload
    },
    setMediaPermission(state, action: PayloadAction<PermissionStatus>) {
      state.media = action.payload
    },
  }
})


export const {
  setCameraPermission,
  setAudioPermission,
  setMediaPermission
} = permissionSlice.actions

export default permissionSlice.reducer
