function viewApousies() {
	apousies = JSON.parse(sessionStorage.getItem("apousies"));
	if (apousies == null) return;

	console.log(apousies);
	var table = document.getElementById('view');
	for (var i = 0; i < apousies.length; i++) {
		if (apousies[i]['teacher'] == '') continue;

		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		
		td1.appendChild(document.createTextNode(persons[i]['teacher']));
		td2.appendChild(document.createTextNode(persons[i]['student']));
		td3.appendChild(document.createTextNode(persons[i]['lesson']));
		td4.appendChild(document.createTextNode(persons[i]['day']));
		td5.appendChild(document.createTextNode(persons[i]['note']));
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		table.appendChild(tr);
	}
}

function insertApousies() {
	apousies = JSON.parse(sessionStorage.getItem("apousies"));
	new_apousies = {
		"id" : apousies != null ? apousies.length + 1 : 1,
		"teacher" : document.getElementById("teachers").value,
		"student" : document.getElementById("students").value,
		"lesson" : document.getElementById("lessons").value,
		"day" : document.apousies.day.value,
		"note" : document.apousies.note.value
	};
	if (apousies == null) apousies = [];
	apousies.push(new_apousies);
	sessionStorage.setItem('apousies', JSON.stringify(apousies));
	viewApousies();
}

function editApousies() {

}

function deleteApousies() {

}