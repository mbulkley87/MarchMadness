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
	var signupEmail = document.getElementById("signupEmail");
	var txtPassword = document.getElementById("inputPassword");
	var btnLogin = document.getElementById("btnLogin");
	var navLogin = document.getElementById("navLogin");
	var btnSignUp = document.getElementById("btnSignUp");
	var navSignUp = document.getElementById("navSignUp");
	var btnLogout = document.getElementById("btnLogout");
	var btnFacebook = document.getElementById("btnFacebook");
	var btnGoogle = document.getElementById("btnGoogle");
	var signUpError = document.getElementById("signUpError");
	var nameDropDown = document.getElementById("nameDropDown");
	var displayName = document.getElementById("displayName");
	
	// Add Login Event
	btnLogin.addEventListener('click', e => {
		var email = txtEmail.value;
		var password = txtPassword.value;
		var auth = firebase.auth();
		// Sign in
		var promise = auth.signInWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e.message));
		//close Modal window
		$("#login-modal").modal("hide");
	});
	
	// Add Signup Event
	btnSignUp.addEventListener('click', e => {
		var email = signupEmail.value;
		var signupPassword1 = document.getElementById("signupPassword1").value;
		var signupPassword2 = document.getElementById("signupPassword2").value;
		var signupName = document.getElementById("signupName");
		if(signupPassword1 == signupPassword2) {
			var auth = firebase.auth();
			// Sign in
			var promise = auth.createUserWithEmailAndPassword(email,signupPassword1)
				.then(function() {
					//update Display Name
					var user = firebase.auth().currentUser;
					user.updateProfile({
					  displayName: signupName.value,
					});
					displayName.innerHTML = signupName.value + "<span class='caret'></span></a>";
					user.sendEmailVerification();
				});
			promise.catch(e => {
				console.log(e.message);
				signUpError.innerHTML = e.message;
			});
			//close Modal window
			$("#signup-modal").modal("hide");
		}
		//Passwords Don't Match
		else {
			signUpError.innerHTML = "Passwords Do Not Match.  Try Again.";
		}
	});
	
	// Realtime Authentication Listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			if (firebase.auth().currentUser.displayName != null) {
				displayName.innerHTML = firebase.auth().currentUser.displayName + "<span class='caret'></span></a>";
			}
			// When logged in, give options to log out and show user
			btnLogout.classList.remove('hide');
			nameDropDown.classList.remove('hide');
			// And hide the login/signup options
			navLogin.classList.add('hide');
			navSignUp.classList.add('hide');
		}
		else {
			console.log("No user logged in.");
			// When not logged in, hide logout options
			btnLogout.classList.add('hide');
			nameDropDown.classList.add('hide');
			// And give login/signup options
			navLogin.classList.remove('hide');
			navSignUp.classList.remove('hide');
		}
	});
	
	// Sign Out Button
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
	// Facebook Sign In
	btnFacebook.addEventListener('click', e => {
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		firebase.auth().getRedirectResult().then(function(result) {
			  if (result.credential) {
			    // This gives you a Facebook Access Token. You can use it to
				// access the Facebook API.
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
	
	// Google Sign In
	btnGoogle.addEventListener('click', e => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		firebase.auth().getRedirectResult().then(function(result) {
			  if (result.credential) {
			    // This gives you a Google Access Token. You can use it to
				// access the Google API.
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
