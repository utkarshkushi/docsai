// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "docsai-d7743.firebaseapp.com",
  projectId: "docsai-d7743",
  storageBucket: "docsai-d7743.appspot.com",
  messagingSenderId: "773403995032",
  appId: "1:773403995032:web:fe87e0eb2a3c39b426d9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
    try {
      const response = await fetch(image_url);
      const buffer = await response.arrayBuffer();
      const file_name = name.replace(" ", "") + Date.now + ".jpeg";
      const storageRef = ref(storage, file_name);
      await uploadBytes(storageRef, buffer, {
        contentType: "image/jpeg",
      });
      const firebase_url = await getDownloadURL(storageRef);
      return firebase_url;
    } catch (error) {
      console.error(error);
    }
  }