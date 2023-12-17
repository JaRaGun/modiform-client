import { db } from "../config";
import {
  collection,
  getDocs,
  query,
  where,
  //   addDoc,
  //   doc,
  //   setDoc,
  //   updateDoc,
  //   deleteDoc,
  //   getDoc,
} from "firebase/firestore";

export const checkUserData = async (studentId: number|null, password: string) => {
  console.log("studentFire", studentId);
  console.log("passwordFire", password);
  try {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(
      query(
        userRef,
        where("studentId", "==", studentId),
        where("password", "==", password)
      )
    );
    console.log("QuerySnapshot", querySnapshot);
    return querySnapshot;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
