import {CameraMode, CameraType, FlashMode} from "expo-camera"
import {createSlice} from "@reduxjs/toolkit"

export type CameraFacing = CameraType
export type CameraFlash = FlashMode
export type Mode = CameraMode

export interface CameraState {
  facing: CameraFacing
  flash: CameraFlash
  mode: Mode
  torch: boolean
}

const FLASH_MODES: CameraFlash[] = ["on", "off", "auto"]

const initialState: CameraState = {
  facing: "back",
  flash: "off",
  mode: "picture",
  torch: false,
}

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {

    cycleCameraFacing(state) {
      state.facing = state.facing === "back" ? "front" : "back"
    },

    cycleCameraFlash(state) {
      const index = FLASH_MODES.indexOf(state.flash)
      state.flash = FLASH_MODES[(index + 1) % FLASH_MODES.length]
    },

    cycleCameraMode(state) {
      state.mode = state.mode === "picture" ? "video" : "picture"

      state.flash = "off"
      state.torch = false
    },

    enableTorch(state) {
      state.torch = !state.torch
    }

  }
})

export const {
  cycleCameraFacing,
  cycleCameraFlash,
  cycleCameraMode,
  enableTorch
} = cameraSlice.actions

export default cameraSlice.reducer
