// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   initializeAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyDsdADuVGphQKJ1kkK2Bf7-zbyGGTbukdA",
//     authDomain: "phone-buddy-797f8.firebaseapp.com",
//     projectId: "phone-buddy-797f8",
//     storageBucket: "phone-buddy-797f8.firebasestorage.app",
//     messagingSenderId: "581603426712",
//     appId: "1:581603426712:web:44b7306860b9fc6179abed",
//     measurementId: "G-LHHGCSCXEP"
// };
// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app);

// const firebaseService = {
//   getFirebaseUser: async () => {
//     const user = getAuth().currentUser;
//     if (user != null) {
//       return user;
//     }
//   },

//   createUser: async (email, password) => {
//     try {
//       const userCred = await createUserWithEmailAndPassword(auth, email, password);
//       return userCred;
//     } catch (error) {
//       console.error('[firebase.js - createUser] Error creating user in Firebase', error);
//       throw error;
//     }
//   },

//   createUserWithGoogle: async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const userCred = await signInWithPopup(auth, provider);
//       return userCred;
//     } catch (error) {
//       console.error('[firebase.js - createUserWithGoogle] Error creating user with Google in Firebase', error);
//       throw error;
//     }
//   },

//   signInUser: async (email, password) => {
//     await signInWithEmailAndPassword(auth, email, password);
//   },

//   signInUserWithGoogle: async () => {
//     const provider = new GoogleAuthProvider();
//     await signInWithPopup(auth, provider);
//   },

//   signOutUser: async () => {
//     await signOut(auth);
//   },
  
// };

// export {firebaseService, app};