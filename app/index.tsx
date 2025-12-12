import {View, Text, StyleSheet} from "react-native";
import {CameraView, useCameraPermissions, useMicrophonePermissions} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {useEffect, useRef} from "react";

export default function Index() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions()
  const [audioPermission, requestAudioPermission] = useMicrophonePermissions()
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions()
  const cameraRef = useRef<CameraView | null>(null)

  // Check and grant permissions as soon as the app loads.
  useEffect(() => {
    askAllPermissions()
  }, [])

  const askAllPermissions = async () => {
    if (!cameraPermission?.granted) {
      await requestCameraPermission()
    }
    if (!audioPermission?.granted) {
      await requestAudioPermission()
    }
    if (!mediaPermission?.granted) {
      await requestMediaPermission()
    }
    alert("Button is pressed!")
  }

  return (
    <View style={styles.container}>
      <Text>Initial Setup</Text>

      <Text>Camera {cameraPermission?.granted ? "Granted" : "Not granted"}</Text>
      <Text>Audio {audioPermission?.granted ? "Granted" : "Not granted"}</Text>
      <Text>Media {mediaPermission?.granted ? "Granted" : "Not granted"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
  }
})