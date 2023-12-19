/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../config";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  doc,
  //   setDoc,
  //   updateDoc,
  deleteDoc,
  Timestamp,
  //   getDoc,
} from "firebase/firestore";
const generateRandomNumber = (): number => {
  return Math.floor(10000 + Math.random() * 90000);
};

const getCurrentDate = (): string => {
  const date = new Date();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so add 1 and format as 2 digits
  const day = ("0" + date.getDate()).slice(-2); // Format as 2 digits
  const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of year
  return `${month}/${day}/${year}`;
};
export const checkUserData = async (
  studentId: number | null,
  password: string
) => {
  // console.log("studentFire", studentId);
  // console.log("passwordFire", password);
  // eslint-disable-next-line no-useless-catch
  try {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(
      query(
        userRef,
        where("studentId", "==", studentId),
        where("password", "==", password)
      )
    );
    return querySnapshot;
  } catch (error) {
    throw error;
  }
};

export const addToCartFirebase = async (
  studentId: number | null,
  cart: any
) => {
  try {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(
      query(userRef, where("studentId", "==", studentId))
    );

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const cartRef = collection(db, "users", userDoc.id, "cart");
      await addDoc(cartRef, cart);
    }
    return querySnapshot;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const removeToCartFirebase = async (
  itemCode: string,
  studentId: number | null
) => {
  try {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(
      query(userRef, where("studentId", "==", studentId))
    );

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const cartRef = collection(db, "users", userDoc.id, "cart");
      const cartSnapshot = await getDocs(
        query(cartRef, where("itemCode", "==", itemCode))
      );

      if (!cartSnapshot.empty) {
        const itemDoc = cartSnapshot.docs[0];
        await deleteDoc(doc(db, "users", userDoc.id, "cart", itemDoc.id));
      }
    }
  } catch (error) {
    console.error("Error removing item:", error);
    throw error;
  }
};

export const AddItemOrderToFirebase = async (
  studentId: number | null,
  cartItems: any[],
  username: string,
  totalItems: number,
  totalAmount: number
) => {
  //  Add Item order
  // console.log("studentId", studentId);

  // console.log("cartItems", cartItems);
  const userRef = collection(db, "orders");
  await addDoc(userRef, {
    studentId,
    orderDate: getCurrentDate(),
    orderNumber: generateRandomNumber(),
    totalItems,
    totalAmount,
    username,
    status: "pending",
  });
  try {
    const querySnapshot = await getDocs(
      query(userRef, where("studentId", "==", studentId))
    );

    if (!querySnapshot.empty) {
      const orderDoc = querySnapshot.docs[0];
      const invoiceRef = collection(db, "orders", orderDoc.id, "ordersItems");

      // Add each cart item as a separate document in the invoice collection
      for (const item of cartItems) {
        await addDoc(invoiceRef, item);
      }
    }
    return querySnapshot;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const RemoveInnerCollectionFirebase = async (
  parentCollectionName: string,
  innerCollectionName: string,
  studentId: number | null
) => {
  try {
    const userRef = collection(db, parentCollectionName);
    const querySnapshot = await getDocs(
      query(userRef, where("studentId", "==", studentId))
    );
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const cartRef = collection(
        db,
        parentCollectionName,
        userDoc.id,
        innerCollectionName
      );
      const cartSnapshot = await getDocs(cartRef);
      if (!cartSnapshot.empty) {
        cartSnapshot.forEach((docSnapshot) => {
          deleteDoc(
            doc(
              db,
              parentCollectionName,
              userDoc.id,
              innerCollectionName,
              docSnapshot.id
            )
          );
        });
      }
    }
    return querySnapshot;
  } catch (error) {
    console.error("Error removing item:", error);
    throw error;
  }
};

export const AddNotificationsToFirebase = async (
  studentId: number | null,
  message: string
) => {
  try {
    const userRef = collection(db, "notifications");
    await addDoc(userRef, {
      id: generateRandomNumber(),
      title: "Client User",
      senderId: studentId,
      message: message,
      date: Timestamp.fromDate(new Date()), // Use Firestore Timestamp
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const CheckIsOrderExist = async (studentId: number | null) => {
  try {
    const userRef = collection(db, "orders");
    const querySnapshot = await getDocs(
      query(userRef, where("studentId", "==", studentId))
    );
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
