// bsengineer website ka code
let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 3){
        console.log('ok popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};




// let popped = 0;

// document.addEventListener('mouseover', function(e){
    
//     if (e.target.className === "balloon"){
        
//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }   
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){
        
//     })
// };


let pooped2 = 0;

document.addEventListener(`mouseover`,function(e){
    if (e.target.className === "balloon") {

        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "WOW!";
        popped2++;
        removeEvent(e);
        checkAllPopped();
    }
});





// signin and signout
const firebaseConfig = {
  apiKey: "AIzaSyDtLWmHsyO7apEWQMgUM6rcMQqgEqJAdmU",
  authDomain: "hackathon-gaming-web.firebaseapp.com",
  projectId: "hackathon-gaming-web",
  storageBucket: "hackathon-gaming-web.appspot.com",
  messagingSenderId: "730902221918",
  appId: "1:730902221918:web:fb8739dffafae51b7910cf",
  measurementId: "G-4T0TQPQ9S6"
};

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}


// const signUp = () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed In
//             window.location.href = "welcomeuser.html"
//             var user = userCredential.user;
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // alert(errorMessage)
//         });
// }





function signup () {
let email  =document.getElementById("email").value;
let password =document.getElementById("password").value

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    window.location.href = "welcomeuser.html"
    // var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // console.log(user.email, user.password);
    window.location.href = "index.html"
  });
}


// function login(){
//   let email  =document.getElementById("mail").value
//   let password =document.getElementById("password").value
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });
// }