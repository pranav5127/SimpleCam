import * as MediaLibrary from "expo-media-library"

export async function setAssets(uri: string) {
  const asset = await MediaLibrary.createAssetAsync(uri)
  try {
    await MediaLibrary.createAlbumAsync('Stream', asset)
    console.log("Saved Image to gallery")
  } catch (e) {
    throw new Error(`Failed to save image ${e}`)
  }
}