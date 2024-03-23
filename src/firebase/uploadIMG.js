import { storage } from "./index";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"

export const uploadIMG = async (file, path) => {
  if (file == null || undefined) {
    return;
  }
  //allow only images
  if (!file.type.match("image.*")) {
    return;
  }
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  // change https://firebasestorage.googleapis.com/ to https://ik.imagekit.io/srmsigkdd/
  const result = url.replace("https://firebasestorage.googleapis.com/", "https://ik.imagekit.io/srmsigkdd/");
  return result;
};
