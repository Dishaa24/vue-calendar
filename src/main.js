import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyC41PeFVD2gsoc-vMp3hgrOminl2Hy7vJc",
    authDomain: "vue-calendar-e62ef.firebaseapp.com",
    databaseURL: "https://vue-calendar-e62ef.firebaseio.com",
    projectId: "vue-calendar-e62ef",
    storageBucket: "vue-calendar-e62ef.appspot.com",
    messagingSenderId: "973132245196",
    appId: "1:973132245196:web:ff2aa011f02434e2833a69"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
