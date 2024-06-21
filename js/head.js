function getLoginUser() {
	json_accounts = JSON.parse(sessionStorage.getItem('accounts'));
	accounts = json_accounts['accounts'];

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i]['login'] == 1) {
			document.getElementById('login_info').innerHTML = accounts[i]['fullname'];
		}
	}
}

function logout() {
	//sessionStorage.removeItem('accounts');
	logoutUser();
	window.top.document.location = "http://localhost/School/login.html";
}

function logoutUser() {
	json_accounts = JSON.parse(sessionStorage.getItem('accounts'));
	accounts = json_accounts['accounts'];

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i]['login'] == 1) {
			accounts[i]['login'] = 0;
			sessionStorage.setItem('accounts', JSON.stringify({"accounts" : accounts}));
		}
	}
}