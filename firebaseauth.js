// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD7VpbUJDoQ7USHQDYR56RxsusYmuAOrqA",
//   authDomain: "healthyhabits-f7861.firebaseapp.com",
//   projectId: "healthyhabits-f7861",
//   storageBucket: "healthyhabits-f7861.appspot.com",
//   messagingSenderId: "278754732076",
//   appId: "1:278754732076:web:f37dab043039e1733ac989",
//   measurementId: "G-DRT4DR0GCX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"

const firebaseConfig = {
   apiKey: "AIzaSyD7VpbUJDoQ7USHQDYR56RxsusYmuAOrqA",
   authDomain: "healthyhabits-f7861.firebaseapp.com",
   projectId: "healthyhabits-f7861",
   storageBucket: "healthyhabits-f7861.appspot.com",
   messagingSenderId: "278754732076",
   appId: "1:278754732076:web:f37dab043039e1733ac989",
   measurementId: "G-DRT4DR0GCX"
 };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
function showMessage(message, divId){
   var messageDiv=document.getElementById(divId);
   messageDiv.style.display="block";
   messageDiv.innerHTML=message;
   messageDiv.style.opacity=1;
   setTimeout(function(){
       messageDiv.style.opacity=0;
   },5000);
}
const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click', (event)=>{
   event.preventDefault();
   const email=document.getElementById('rEmail').value;
   const password=document.getElementById('rPassword').value;
   const firstName=document.getElementById('fName').value;
   const lastName=document.getElementById('lName').value;
   const auth=getAuth();
   const db=getFirestore();
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential)=>{
       const user=userCredential.user;
       const userData={
           email: email,
           firstName: firstName,
           lastName:lastName
       };
       showMessage('Account Created Successfully', 'signUpMessage');
       const docRef=doc(db, "users", user.uid);
       setDoc(docRef,userData)
       .then(()=>{
           window.location.href='index.html';
       })
       .catch((error)=>{
           console.error("error writing document", error);
       });
   })
   .catch((error)=>{
       const errorCode=error.code;
       if(errorCode=='auth/email-already-in-use'){
           showMessage('Email Address Already Exists !!!', 'signUpMessage');
       }
       else{
           showMessage('unable to create User', 'signUpMessage');
       }
   })
});
const signIn=document.getElementById('submitSignIn');
signIn.addEventListener('click', (event)=>{
   event.preventDefault();
   const email=document.getElementById('email').value;
   const password=document.getElementById('password').value;
   const auth=getAuth();
   signInWithEmailAndPassword(auth, email,password)
   .then((userCredential)=>{
       showMessage('login is successful', 'signInMessage');
       const user=userCredential.user;
       localStorage.setItem('loggedInUserId', user.uid);
       window.location.href='index.html';
   })
   .catch((error)=>{
       const errorCode=error.code;
       if(errorCode==='auth/invalid-credential'){
           showMessage('Incorrect Email or Password', 'signInMessage');
       }
       else{
           showMessage('Account does not Exist', 'signInMessage');
       }
   })
})