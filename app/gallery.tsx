import { View, FlatList, Dimensions, StyleSheet } from "react-native"
import { Image } from "expo-image"
import { VideoView, useVideoPlayer } from "expo-video"
import { useAppSelector } from "@/store/hooks"

const { width, height } = Dimensions.get("window")

export default function Gallery() {
  const assets = useAppSelector(s => s.camera.latestAssets)

  if (!assets || assets.length === 0) {
    return <View />
  }

  return (
    <FlatList
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
          {item.mediaType === "video" ? (
            <GalleryVideo uri={item.uri} />
          ) : (
            <Image
              source={{ uri: item.uri }}
              style={styles.media}
              contentFit="contain"
            />
          )}
        </View>
      )}
    />
  )
}



function GalleryVideo({ uri }: { uri: string }) {
  const player = useVideoPlayer(uri, (player) => {
    player.loop = true
    player.pause()
  })

  return (
    <VideoView
      style={styles.media}
      player={player}
      allowsFullscreen
      allowsPictureInPicture
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
  media: {
    width,
    height,
  },
})
