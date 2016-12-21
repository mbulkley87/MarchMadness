(function() {

	// Initialize Firebase
	var config = {
		apiKey : "AIzaSyBkJ999_HKQ7RcORlSZ-Pr6wMcM1P1NNrc",
		authDomain : "marchmadness-64d3f.firebaseapp.com",
		databaseURL : "https://marchmadness-64d3f.firebaseio.com",
		storageBucket : "marchmadness-64d3f.appspot.com",
		messagingSenderId : "444356556032"
	};
	firebase.initializeApp(config);
	// Get Elements
	var txtEmail = document.getElementById("inputUsernameEmail");
	var txtPassword = document.getElementById("inputPassword");
	var btnLogin = document.getElementById("btnLogin");
	var btnSignUp = document.getElementById("btnSignUp");
	var btnLogout = document.getElementById("btnLogout");
	var loggedInAs = document.getElementById("loggedInAs");
	var btnFacebook = document.getElementById("btnFacebook");
	var btnGoogle = document.getElementById("btnGoogle");
	var loginStatus = document.getElementById("loginStatus");
	var socialMediaLogins = document.getElementById("socialMediaLogins");
	var userBasedLogin = document.getElementById("userBasedLogin");
	
	// Add Login Event
	btnLogin.addEventListener('click', e => {
		var email = txtEmail.value;
		var password = txtPassword.value;
		var auth = firebase.auth();
		// Sign in
		var promise = auth.signInWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e.message));
	});
	
	// Add Signup Event
	btnSignUp.addEventListener('click', e => {
		var email = txtEmail.value;
		var password = txtPassword.value;
		var auth = firebase.auth();
		// Sign in
		var promise = auth.createUserWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e.message));
	});
	
	// Realtime Authentication Listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			if (firebaseUser.displayName == null) {
				userNameField.innerHTML = firebaseUser.email;
			}
			else {
				userNameField.innerHTML = firebaseUser.displayName;
			}
			//When logged in, give options to log out and show user
			btnLogout.classList.remove('hide');
			loggedInAs.classList.remove('hide');
			//And hide the login/signup options
			btnLogin.classList.add('hide');
			btnSignUp.classList.add('hide');
			socialMediaLogins.classList.add('hide');
			userBasedLogin.classList.add('hide');
			//Change Status
			loginStatus.innerHTML = "Successful Login";
		}
		else {
			//When not logged in, hide logout options
			console.log("not logged in");
			btnLogout.classList.add('hide');
			loggedInAs.classList.add('hide');
			//And give login/signup options
			btnLogin.classList.remove('hide');
			btnSignUp.classList.remove('hide');
			socialMediaLogins.classList.remove('hide');
			userBasedLogin.classList.remove('hide');
			//Change status
			loginStatus.innerHTML = "Please Log In";
		}
	});
	
	//Sign Out Button
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
	//Facebook Sign In
	btnFacebook.addEventListener('click', e => {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		firebase.auth().getRedirectResult().then(function(result) {
			  if (result.credential) {
			    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
			    var token = result.credential.accessToken;
			    // ...
			  }
			  // The signed-in user info.
			  var user = result.user;
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
	});
	
	//Google Sign In
	btnGoogle.addEventListener('click', e => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		firebase.auth().getRedirectResult().then(function(result) {
			  if (result.credential) {
			    // This gives you a Google Access Token. You can use it to access the Google API.
			    var token = result.credential.accessToken;
			    // ...
			  }
			  // The signed-in user info.
			  var user = result.user;
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
	});
	

}());
