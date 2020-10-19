import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyBuGcUKbkkUC4MkzsIe0BSfQeWpYFoCyRw",
      authDomain: "todo-app-8111c.firebaseapp.com",
      databaseURL: "https://todo-app-8111c.firebaseio.com",
      projectId: "todo-app-8111c",
      storageBucket: "todo-app-8111c.appspot.com",
      messagingSenderId: "626633169410",
      appId: "1:626633169410:web:af1b6003dbfae2f9c1251b"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});











// var firebaseConfig = {
//   apiKey: "AIzaSyBuGcUKbkkUC4MkzsIe0BSfQeWpYFoCyRw",
//   authDomain: "todo-app-8111c.firebaseapp.com",
//   databaseURL: "https://todo-app-8111c.firebaseio.com",
//   projectId: "todo-app-8111c",
//   storageBucket: "todo-app-8111c.appspot.com",
//   messagingSenderId: "626633169410",
//   appId: "1:626633169410:web:af1b6003dbfae2f9c1251b"
//   };