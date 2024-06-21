async function Accounts() {
	try {
		const response = await fetch('js/accounts.json');
		const data = await response.text();
		sessionStorage.setItem('accounts', data);
	} catch (err) {
		console.error(err);
	}
}

function isPerson(username, password) {
	json_accounts = JSON.parse(sessionStorage.getItem('accounts'));
	accounts = json_accounts['accounts'];
	
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i]['username'] === username && accounts[i]['password'] === password) {
			accounts[i]['login'] = 1;
			sessionStorage.setItem('accounts', JSON.stringify({"accounts" : accounts}));

			return true;
		}
	}

	return false;
}

function checkLogin(event) {
	event.preventDefault();
	email = document.login.email.value;
	psw = document.login.psw.value;
	result = isPerson(email, psw);
	
	if (result) window.location.replace("school.html"); 
	else {
		alert('wrong credentials');
		login.email.focus();

		return result;
	}
}

function CreateAccount() {
	if (document.getElementById("repeat").getAttribute("hidden") == "hidden") {
		document.getElementById("name").removeAttribute("hidden");
		document.getElementById("surname").removeAttribute("hidden");
		document.getElementById("repeat").removeAttribute("hidden");
	} else {
		psw = document.login.psw.value;
		rp_psw = document.login.psw_repeat.value;
		if (psw == rp_psw) {
			txt_accounts = sessionStorage.getItem("accounts");

			if (txt_accounts != null) {
				json_accounts = JSON.parse(txt_accounts);
				accounts = json_accounts['accounts'];
			} else accounts = [];
			new_account = {
				"id" : accounts.length + 1,
				"fullname" : document.login.name.value + " " + document.login.surname.value,
				"username" : document.login.email.value,
				"password" : document.login.psw.value,
				"login" : 0
			};

			accounts.push(new_account);
			sessionStorage.setItem('accounts', JSON.stringify({"accounts" : accounts}));
			Cancel();
		} else {
			alert('wrong repeat password[' + psw + ',' + rp_psw + ']');
			document.login.psw.focus();

			return false;
		}
	}
}

function Cancel() {
	document.getElementById("name").setAttribute("hidden","hidden");
	document.getElementById("surname").setAttribute("hidden","hidden");
	document.getElementById("repeat").setAttribute("hidden","hidden");
}
