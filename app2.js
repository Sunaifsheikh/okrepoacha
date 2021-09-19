const firebaseConfig = {
    apiKey: "AIzaSyB2Ly-_WH51YoyrM5kCjS0muUIfpycu3tQ",
    authDomain: "pop-ballon-c0889.firebaseapp.com",
    projectId: "pop-ballon-c0889",
    storageBucket: "pop-ballon-c0889.appspot.com",
    messagingSenderId: "734538963804",
    appId: "1:734538963804:web:9fb788eddce42876443f99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
let provider = new firebase.auth.GoogleAuthProvider();

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log("Document written");
        pageRedirect();
        setData(user);
    })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
function pageRedirect() {
    location.href = "http://localhost:5500/main.html";
}      
function logout() {
    auth.signOut().then(() => {
        console.log("Logging out");
       location.href = "http://localhost:5500/index.html";
    });
    
}
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
auth.onAuthStateChanged((user) => {
    if (user) {
        firestore.collection('users').doc(user.uid).set({
                email: user.email,
                lastLoggedInAt: new Date(),
                currentlevel:'level 1'
            })
            .then(() => {
                console.log("Document written");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        setData(user);
    }
});
const setData = (user) => {
    firestore.collection('users').doc(user.uid).get().then((querySnapshot) => {
        const data = querySnapshot.data();
        console.log(data.email);
        const lastLoggedInAt = data.lastLoggedInAt.toDate();
        const lastLoggedInSpan = document.getElementById("lastLoggedIn");
        lastLoggedInSpan.innerHTML = lastLoggedInAt;
        const username=data.email;
        const userSpan = document.getElementById("user");
        userSpan.innerHTML=username;
        const userLevel=data.currentlevel;
        const levelSpan=document.getElementById('userlevel');
        levelSpan.innerHTML=userLevel;
    });
}






















//signinWithGoogle
// 
// function googleSignIn(){
    // // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // firebase.auth().useDeviceLanguage();
    // provider.setCustomParameters({
    //     'login_hint': 'user@example.com'
    //   });
    //   firebase.auth()
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     /** @type {firebase.auth.OAuthCredential} */
    //     var credential = result.credential;
    //     pageRedirect();
    
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     console.log(user);
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
    // };
    