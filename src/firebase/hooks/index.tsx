/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  //   getDocs,
  onSnapshot,
  QuerySnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config";

import { useEffect, useState } from "react";

export function GetCollectionDataFirebase(
  doc: any,
  gender: string,
  size: string,
  category: string
) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (doc && gender && size && category) {
      let docRef: any = collection(db, doc);
      docRef = query(
        docRef,
        where("gender", "==", gender),
        where("size", "==", size),
        where("tag", "==", category)
      );

      const unsubscribe = onSnapshot(docRef, (snapshot: QuerySnapshot) => {
        const dataCollection = snapshot.docs.map((doc) => doc.data());
        setData(dataCollection);
      });

      // Clean up the listener when the component unmounts
      return () => {
        unsubscribe();
      };
    }
  }, [doc, gender, size, category]);

  return data;
}
