// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC469sP92WPlprUuPVXf9JOThscPSvDOhs",
    authDomain: "todo-cc309.firebaseapp.com",
    databaseURL: "https://todo-cc309-default-rtdb.firebaseio.com",
    projectId: "todo-cc309",
    storageBucket: "todo-cc309.appspot.com",
    messagingSenderId: "462852831282",
    appId: "1:462852831282:web:c9318ef5251d763896642b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
