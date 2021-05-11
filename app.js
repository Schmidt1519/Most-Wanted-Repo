// 'use strict';


// Beginning table to view all people and information
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

viewAll();

// NAME SEARCH
function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName===firstNameInput){   
            return true;
            }

        if(person.firstName === firstNameInput && person.lastName === lastNameInput){ 
             

            return true;
        }
            return false;
        });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
       
       let concat = ''
        filteredPeople.map(function(person){
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
            <button onclick="viewFam(${person.id})">Descendants</button>
        </tr>`
        })
        document.getElementById("peopleRows").innerHTML = ""
        document.getElementById("peopleRows").innerHTML=concat
        viewFam();
    }
    else{
      alert('Sorry, looks like there is no one with that name.');
    }
    
}

// SINGLE CRITERIA SEARCH
function singleSearch(){
    // Grabbing the values from our singleCriteriaForm form and inputs.
    let genderInput = document.forms['nameForm']['gender'].value;
    let dobInput = document.forms['nameForm']['dob'].value;
    let heightInput = document.forms['nameForm']['height'].value;
    let weightInput = document.forms['nameForm']['weight'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    let occupationInput = document.forms['nameForm']['occupation'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let singleFilteredPeople = people.filter(function (person) {
        if(person.gender === genderInput || person.dob == dobInput || person.height == heightInput || person.weight == weightInput || person.eyeColor === eyeColorInput || person.occupation === occupationInput){
            return true;
        }
            return false;
        });
    
    //Rather than console logging, you need to append the filteredPeople to a table.  
    if(singleFilteredPeople.length > 0){
    
        let concat=''
         singleFilteredPeople.map(function(person){
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
         document.getElementById("peopleRows").innerHTML = ""
         document.getElementById("peopleRows").innerHTML = concat
        
    }
     else{
       alert('Sorry, looks like there is no one with that criteria.');
    }
}


// MULTI CRITERIA SEARCH
function multipleCriteriaSearch(){

        function genderSearch(){

        let genderInput = document.forms['nameForm']['gender'].value;

        let results = multiFilteredPeople.filter(function (person){
            if(person.gender === genderInput){
                return true;
            }
                return false;
        });
           return results;
        }

        function dobSearch(multiFilteredPeople){

        let dobInput = document.forms['nameForm']['dob'].value;

        let dobFilter = multiFilteredPeople.filter(function (person){
            if(person.dob == dobInput){
                return true;
            }
                return false;
        });
         return dobFilter;
        }

        function heightSearch(multiFilteredPeople){

        let heightInput = document.forms['nameForm']['height'].value;

        let heightFilter = multiFilteredPeople.filter(function (person){
            if(person.height == heightInput){
                return true;
            }
                return false;
        });
         return heightFilter;
        }

        function weightSearch(multiFilteredPeople){

        let weightInput = document.forms['nameForm']['weight'].value;

        let weightFilter = multiFilteredPeople.filter(function (person){
            if(person.weight == weightInput){
                return true;
            }
                return false;
        });
         return weightFilter;
        }
    
        function eyeColorSearch(multiFilteredPeople){

        let eyeColorInput = document.forms['nameForm']['eyeColor'].value;

        let results = multiFilteredPeople.filter(function (person){
            if(person.eyeColor === eyeColorInput){
                return true;
            }
                return false;
        });
         return results;
        }

        function occupationSearch(multiFilteredPeople){

        let occupationInput = document.forms['nameForm']['occupation'].value;

        results = multiFilteredPeople.filter(function (person){
            if(person.occupation === occupationInput){
                return true;
            }
                return false;
        });
         return results;
        }

        let multiFilteredPeople = people;
        
        if(document.forms['nameForm']['gender'].value != ""){
            multiFilteredPeople = genderSearch(multiFilteredPeople);
        }
        if(document.forms['nameForm']['dob'].value != "") {
            multiFilteredPeople = dobSearch(multiFilteredPeople);
        }
        if(document.forms['nameForm']['height'].value != "") {
            multiFilteredPeople = heightSearch(multiFilteredPeople);
        }
        if(document.forms['nameForm']['weight'].value != "") {
            multiFilteredPeople = weightSearch(multiFilteredPeople);
        }
        if(document.forms['nameForm']['eyeColor'].value != ""){
            multiFilteredPeople = eyeColorSearch(multiFilteredPeople);
        }
        if(document.forms['nameForm']['occupation'].value != ""){
            multiFilteredPeople = occupationSearch(multiFilteredPeople);
        }
        

            if(multiFilteredPeople.length > 0){
        
                let multiConcat=''
                multiFilteredPeople.map(function(person){
                    multiConcat += `<tr>
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
                document.getElementById("peopleRows").innerHTML = ""
                document.getElementById("peopleRows").innerHTML = multiConcat
                
            }
            else{
            alert('Sorry, looks like there is no one with that criteria.');
            }
}   


// DESCENDANTS
function viewFam(personsId){
        let filterFam = people.filter(function (person) {
            if(person.parents.includes(personsId)){
            return true;
                }
        return false;
        
    });
    
    (filterFam)
        if(filterFam.length >0){
            
        
       let head=''
        let family=''
         filterFam.map(function(person){
           head = `<tr>
             <th>Descendants</th>
             </tr>
             <tr>
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
             </tr>`
             family+=
            `<tr>
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
         document.getElementById("family").innerHTML=head+family;
         
    }
    
}