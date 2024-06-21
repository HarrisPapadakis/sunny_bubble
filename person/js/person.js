function viewPersons() {
	persons = JSON.parse(sessionStorage.getItem("persons"));
	if (persons == null) return;
	
	var table = document.getElementById('view');
	for (var i = 0; i < persons.length; i++) {
		if (persons[i]['name'] == '') continue;

		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		
		td1.appendChild(document.createTextNode(persons[i]['type']));
		td2.appendChild(document.createTextNode(persons[i]['name']));
		td3.appendChild(document.createTextNode(persons[i]['surname']));
		td4.appendChild(document.createTextNode(persons[i]['email']));
		td5.appendChild(document.createTextNode(persons[i]['phone']));
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		table.appendChild(tr);
	}
}

function insertPerson() {
	persons = JSON.parse(sessionStorage.getItem("persons"));
	new_person = {
		"id" : persons != null ? persons.length + 1 : 1,
		"type" : document.getElementById("person_type").value,
		"name" : document.person.name.value,
		"surname" : document.person.surname.value,
		"phone" : document.person.phone.value,
		"email" : document.person.email.value
	};
	if (persons == null) persons = [];
	persons.push(new_person);
	sessionStorage.setItem('persons', JSON.stringify(persons));
	viewPersons();
}

function editPerson() {

}

function deletePerson() {

}