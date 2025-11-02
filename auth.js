import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = { /* Firebase設定 */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 例：ログイン
function tryLogin(pass){ ...Firebase signIn処理... }

// 例：checkAuth()
onAuthStateChanged(auth, user => {
  if(!user) location.href="login.html";
});
