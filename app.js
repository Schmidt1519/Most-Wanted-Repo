'use strict';

// function searchSingle(){
//     // Grabbing the values from our nameForm form and inputs.
//     let genderInput = document.forms['nameForm']['gender'].value;
//     let dobInput = document.forms['nameForm']['dob'].value;
//     let heightInput = document.forms['nameForm']['height'].value;
//     let weightInput = document.forms['nameForm']['weight'].value;
//     let eyecolorInput = document.forms['nameForm']['eyeColor'].value;
//     let occupationInput = document.forms['nameForm']['occupation'].value;
//     // "people" is coming from the data.js file. We have access to it within this JavaScript file.
//     let filteredSingle = people.filter(function (person) {
//         if(person.gender===genderInput){    
//             return true;
//         }
//         if(person.dob==dobInput){    
//             return true;
//         }
//         if(person.height==heightInput){    
//             return true;
//         }
//         if(person.weight==weightInput){    
//             return true;
//         }
//         if(person.eyeColor===eyecolorInput){    
//             return true;
//         }
//         if(person.occupation===occupationInput){    
//             return true;
//         }
//         return false;
    
//     });
       
    
//     // Rather than console logging, you need to append the filteredPeople to a table.
    
//     if(filteredSingle.length >0){
        
//        let concat=''
//         filteredSingle.map(function(person){
//             concat += `<tr>
//             <td>${person.id}</td>
//             <td>${person.firstName}</td>
//             <td>${person.lastName}</td>
//             <td>${person.gender}</td>
//             <td>${person.dob}</td>
//             <td>${person.height}</td>
//             <td>${person.weight}</td>
//             <td>${person.eyeColor}</td>
//             <td>${person.occupation}</td>
//             <td>${person.parents}</td>
//             <td>${person.currentSpouse}</td>
//         </tr>`
//         })
//         document.getElementById("peopleRows").innerHTML = ""
//         document.getElementById("peopleRows").innerHTML=concat

//         let filterMore = filteredSingle.filter(function (person) {
//             if(person.gender===genderInput && person.eyeColor===eyecolorInput){    
//                 return true;
//             }
//             if(person.gender===genderInput && person.occupation===occupationInput){    
//                 return true;
//             }
//             if(person.gender===genderInput && person.dob==dobInput){    
//                 return true;
//             }
//             if(person.gender===genderInput && person.height==heightInput){    
//                 return true;
//             }
//             if(person.gender===genderInput && person.weight==weightInput){    
//                 return true;
//             }
//             if(person.height==heightInput && person.dob==dobInput){    
//                 return true;
//             }
//             if(person.weight==weightInput && person.dob==dobInput){    
//                 return true;
//             }
//             if(person.eyeColor===eyecolorInput && person.dob==dobInput){    
//                 return true;
//             }
//             if(person.occupation===occupationInput && person.dob==dobInput){    
//                 return true;
//             }
//             if(person.height==heightInput && person.weight==weightInput){    
//                 return true;
//             }
//             if(person.height==heightInput && person.eyeColor===eyecolorInput){    
//                 return true;
//             }
//             if(person.height==heightInput && person.occupation===occupationInput){    
//                 return true;
//             }
//             if(person.weight==weightInput && person.eyeColor===eyecolorInput){    
//                 return true;
//             }
//             if(person.weight==weightInput && person.occupation===occupationInput){    
//                 return true;
//             }
//             if(person.eyeColor===eyecolorInput && person.occupation===occupationInput){    
//                 return true;
//             }
//             return false;
        
//         });
//         if(filterMore.length >0){
//         let concat=''
//          filterMore.map(function(person){
//              concat += `<tr>
//              <td>${person.id}</td>
//              <td>${person.firstName}</td>
//              <td>${person.lastName}</td>
//              <td>${person.gender}</td>
//              <td>${person.dob}</td>
//              <td>${person.height}</td>
//              <td>${person.weight}</td>
//              <td>${person.eyeColor}</td>
//              <td>${person.occupation}</td>
//              <td>${person.parents}</td>
//              <td>${person.currentSpouse}</td>
//          </tr>`
//          })
//          document.getElementById("peopleRows").innerHTML = ""
//          document.getElementById("peopleRows").innerHTML=concat
//         }
//     }

//     else{
//       alert('Sorry, looks like there is no one with that name.');
//     }
    
// }

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
       
       let concat=''
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
            <button onclick="veiwFam(${person.id})">Descendants</button>
        </tr>`
        })
        document.getElementById("peopleRows").innerHTML = ""
        document.getElementById("peopleRows").innerHTML=concat
        veiwFam();
    }
    else{
      alert('Sorry, looks like there is no one with that name.');
    }
    
}

function veiwFam(personsId){

    // let firstNameInput = document.forms['nameForm']['fname'].value;
    // let lastNameInput = document.forms['nameForm']['lname'].value;
     let filterFam = people.filter(function (person) {
       
    
        // if(person.firstName === firstNameInput && person.lastName === lastNameInput){ 
             
            if(person.parents.includes(personsId)){
            return true;
                }
        //         return true;
        //  }
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