function checkAuthStatus() {
	// Initialize Firebase
	var config = {
		apiKey : "AIzaSyBkJ999_HKQ7RcORlSZ-Pr6wMcM1P1NNrc",
		authDomain : "marchmadness-64d3f.firebaseapp.com",
		databaseURL : "https://marchmadness-64d3f.firebaseio.com",
		storageBucket : "marchmadness-64d3f.appspot.com",
		messagingSenderId : "444356556032"
	};
	firebase.initializeApp(config);
	
	// Authentication Listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (!firebaseUser) {
			//window.location = "login.html";
		}
	});
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (!firebaseUser) {
			//window.location = "login.html";
		}
	});
};

function loginDropDown(){
    //Handles menu drop down
	var loginDropDown = document.getElementById('loginDropDown');
	loginDropDown.addEventListener('click', e => {
        e.stopPropagation();
    });
};