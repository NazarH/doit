import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyD2koWOw1MaNKwpWp1D3abUcZly8mSV3PE",
    authDomain: "doit-ua.firebaseapp.com",
    databaseURL: "https://doit-ua-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "doit-ua",
    storageBucket: "doit-ua.appspot.com",
    messagingSenderId: "437938245891",
    appId: "1:437938245891:web:443f9f9ed43b7666b5d936"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const database = getDatabase(firebaseApp);


