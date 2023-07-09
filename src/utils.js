import * as FileSystem from 'expo-file-system';

export const readFileAsBase64 = async (fileUri) => {
  const options = { encoding: FileSystem.EncodingType.Base64 };
  const base64 = await FileSystem.readAsStringAsync(fileUri, options);
  return base64;
}