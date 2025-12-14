import * as MediaLibrary from "expo-media-library"

export async function getAssets() {
  const album = await MediaLibrary.getAlbumAsync("Stream")

  if (!album) {
    return []
  }

  const { assets } = await MediaLibrary.getAssetsAsync({
    album: album.id,
    sortBy: [MediaLibrary.SortBy.creationTime],
    mediaType: MediaLibrary.MediaType.photo
  })

  return assets
}
