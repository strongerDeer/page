import {
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from 'firebase/firestore';

import { store } from '@remote/firebase';
import { COLLECTIONS } from '@constants/collection';
import { Card } from '@models/card';

export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.CARD), limit(15))
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(15),
        );
  const snapshot = await getDocs(cardQuery);
  const lastVisible = snapshot.docs[snapshot.docs.length - 1];

  const items = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }));

  return { items, lastVisible };
}

export async function getSearchCards(keyword: string) {
  const searchQuery = query(
    collection(store, COLLECTIONS.CARD),
    where('name', '>=', keyword),
    where('name', '<=', keyword + '\uf8ff'),
  );
  const snapshot = await getDocs(searchQuery);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }));
}
export async function getCard(id: string) {
  const snapshot = await getDoc(doc(collection(store, COLLECTIONS.CARD), id));

  return {
    id: snapshot.id,
    ...(snapshot.data() as Card),
  };
}
