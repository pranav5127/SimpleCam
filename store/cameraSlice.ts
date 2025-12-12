import {CameraType, FlashMode} from "expo-camera";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CameraFacing = CameraType
export type CameraFlash = FlashMode

export interface CameraState {
  facing: CameraFacing
  flash: CameraFlash
}

const  FLASH_MODES: CameraFlash[] = ["on", "off", "auto"]

const initialState: CameraState = {
  facing: "back",
  flash: "off"
}

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers:{
    cycleCameraFacing(state) {
        state.facing = state.facing === "back" ? "front" : "back"
    },

    cycleFlash(state)  {
      const index = FLASH_MODES.indexOf(state.flash)
      state.flash = FLASH_MODES[(index+1) % FLASH_MODES.length]
    }
  }
})

export const {
  cycleCameraFacing,
  cycleFlash
} = cameraSlice.actions

export default cameraSlice.reducer