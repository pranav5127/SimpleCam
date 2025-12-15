import { View, FlatList, Dimensions, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { useAppSelector } from "@/store/hooks"

const { width, height } = Dimensions.get("window")

export default function Gallery() {
  const assets = useAppSelector(s => s.camera.latestAssets)

  if (!assets || assets.length === 0) {
    return <View />
  }

  return (
    <FlatList
      key={"horizontal-gallery"}
      data={assets}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      getItemLayout={(_, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
      renderItem={({ item }) => (
        <View style={styles.page}>
          <Image
            source={{ uri: item.uri }}
            style={styles.image}
            contentFit="contain"
          />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  page: {
    width,
    height,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width,
    height,
  },
})
