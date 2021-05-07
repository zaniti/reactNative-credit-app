import React from 'react'
import { ImageBackground, Text, View,Image, TextInput } from 'react-native';
import { styles } from '../style/styles'
import Button from '../shared/Button'
import {useHistory} from 'react-router-native'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
const Background = require('../../assets/Bgc.jpg')


// firebase configuration :
var firebaseConfig = {
    apiKey: "AIzaSyDROrsgvaj-qZMlyFlH4BLIrIjj2PHwkSs",
    authDomain: "reservation-6583d.firebaseapp.com",
    projectId: "reservation-6583d",
    storageBucket: "reservation-6583d.appspot.com",
    messagingSenderId: "914897974393",
    appId: "1:914897974393:web:4978773ccf416c49e8d0a8",
    measurementId: "G-HP1YYDHCPD"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default function Reservation () {
    
    const history = useHistory()
    const [nom, setNom] = React.useState("")
    const [prenom, setPrenom] = React.useState("");
    const [telephone, setTelephone] = React.useState("");
    const [email, setEmail] = React.useState("");

    

    // add informaiton to firebase : 
    function add () {
        firebase.firestore().collection('reservation').add({
            nom : nom,
            prenom : prenom,
            telephone : telephone,
            email : email
        }).then((res) => {
            setNom(""),
            setPrenom(""),
            setTelephone(""),
            setEmail("")
        })
    }

    return (
        <ImageBackground
            source={Background}
            style={styles.imageBackground}
        >
        
        <View style={styles.cont}>
            <Text style={styles.tle}>Cordonnées</Text>
            <Text  style={styles.tlee}>Renseigner les champs ci-dessous et passer à l'étape suivante !</Text>
            <TextInput
            style={styles.inp}
            placeholder={' Nom'}
            placeholderTextColor="white"
            onChangeText={setNom}
            />
            <TextInput
            style={styles.inp}
            placeholder={' Prenom'}
            placeholderTextColor="white"
            onChangeText={setPrenom}
            />
             <TextInput
            style={styles.inp}
            placeholder={' Email'}
            placeholderTextColor="white"
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.inp}
            placeholder={'Téléphone'}
            placeholderTextColor="white"
            onChangeText={setTelephone}
            />
           
            <Button
            title='Simuler'
            onPress={() => {
                add()
            }}
            />
        </View>
        </ImageBackground>
    )
}

