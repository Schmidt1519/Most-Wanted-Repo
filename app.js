'use strict';




function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
            return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    
    if(filteredPeople.length > 0){
       
       let concat=''
        filteredPeople.map(function(person){
            concat += `<tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Eyecolor</th>
                <th>Occupation</th>
                <th>Parents</th>
                <th>Spouse</th>
            </tr>
            <tr>
            <td>${person.id}</td>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.gender}</td>
            <td>${person.dob}</td>
            <td>${person.height}</td>
            <td>${person.weight}</td>
            <td>${person.eyeColor}</td>
            <td>${person.occupation}</td>
            <td>${person.parents}</td>
            <td>${person.currentSpouse}</td>
        </tr>`
        })
        document.getElementById("filteredPeople").innerHTML=concat
       
    }
    else{
      alert('Sorry, looks like there is no one with that name.');
    }
}

function viewAll(){
    let concat = ''
    people.map(function (person){
        concat += `<tr>
        <td>${person.id}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.gender}</td>
        <td>${person.dob}</td>
        <td>${person.height}</td>
        <td>${person.weight}</td>
        <td>${person.eyeColor}</td>
        <td>${person.occupation}</td>
        <td>${person.parents}</td>
        <td>${person.currentSpouse}</td>
        </tr>`
    })
    document.getElementById("peopleRows").innerHTML = concat;
}

<<<<<<< HEAD
viewAll()
// document.getElementById("peopleRows").innerHTML = ""
=======
viewAll();
//document.getElementById("peopleRows")innerHTML = ""
>>>>>>> c24d420e95d1a9e66577fbbbfa39169e27552834
