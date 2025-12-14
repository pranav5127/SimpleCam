import { View, Image, StyleSheet } from "react-native"
import { useAppSelector } from "@/store/hooks"

export default function GalleryPreview() {
  const latest = useAppSelector(s => s.camera.latestAsset)

  if (!latest) {
    return <View style={styles.placeholder} />
  }

  return (
    <Image
      source={{ uri: latest.uri }}
      style={styles.preview}
    />
  )
}


const styles = StyleSheet.create({
  preview: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    borderWidth: 2,
    borderColor: "white",
  },
  placeholder: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    backgroundColor: "#333",
  },
})
