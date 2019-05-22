$(document).ready(function(){
            // Your web app's Firebase configuration
            var firebaseConfig = {
              apiKey: "AIzaSyDJQZuachadT72PbdUQkrKlfCpGf6NKHmU",
              authDomain: "fir-authentication-ee9a5.firebaseapp.com",
              databaseURL: "https://fir-authentication-ee9a5.firebaseio.com",
              projectId: "fir-authentication-ee9a5",
              storageBucket: "fir-authentication-ee9a5.appspot.com",
              messagingSenderId: "38656102300",
              appId: "1:38656102300:web:63e8c102679ead56"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);


            function registerUser() {
              var mail = document.querySelector("#reg_email").value;
              var password = document.querySelector("#reg_password").value;
          
              firebase.auth().createUserWithEmailAndPassword(mail, password)
              .then(function(mail, password) {

                  console.log(mail);
                  console.log(password);
                  console.log(user);

                  alert("Dear: " + mail + "You have been succesfully Registered, please Check console for details");
              })
              .then(function(err){
                  console.log(err);
              })
          
              alert("Dear: " + mail + "You have been succesfully Registered, please Check console for details");
          }

          function loginUser() {
            var login_mail = document.querySelector("#email").value;
            var login_password = document.querySelector("#password").value;

            // signInWithEmailAndPassword(email, password)
                firebase.auth().signInWithEmailAndPassword(login_mail, login_password) 
                .then(function(user) {
                    console.log(user.messagingSenderId);
                    console.log(user.email);
                    console.log(user);
                })
                .catch((err) => {
                    console.log(err);
                    alert("there has been an error, check console")
                })

                alert("DEAR: " + login_mail + "U have been succesfully loged in, check console for details");
          }
          
        //   Registering User
          
          const register_btn = document.querySelector("#register_btn");
          
          register_btn.addEventListener('click', (e) => {
              e.preventDefault();
              registerUser();
          })

        // Login User 

        const login_btn = document.querySelector("#login_btn");

        login_btn.addEventListener("click", function(e){
            e.preventDefault();
            loginUser();
        })


});