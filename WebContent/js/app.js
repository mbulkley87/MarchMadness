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
	//Get Elements
	var txtEmail = document.getElementById("txtEmail");
	var txtPassword = document.getElementById("txtPassword");
	var btnLogin = document.getElementById("btnLogin");
	var btnSignUp = document.getElementById("btnSignUp");
	var btnLogout = document.getElementById("btnLogout");
	
	//Add Login Event
	btnLogin.addEventListener('click', e => {
		var email = txtEmail.value;
		var password = txtPassword.value;
		var auth = firebase.auth();
		//Sign in	
		var promise = auth.signInWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e.message));
	});
	
	//Add Signup Event
	btnSignUp.addEventListener('click', e => {
		var email = txtEmail.value;
		var password = txtPassword.value;
		var auth = firebase.auth();
		//Sign in	
		var promise = auth.createUserWithEmailAndPassword(email,password);
		promise.catch(e => console.log(e.message));
	});
	
	//Add Realtime Authentication Listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			btnLogin.classList.add('hide');
			btnSignUp.classList.add('hide');
		}
		else {
			console.log("not logged in");
			btnLogout.classList.add('hide');
			btnLogin.classList.remove('hide');
			btnSignUp.classList.remove('hide');
		}
	});
	
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
	
	

}());
