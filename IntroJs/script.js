const form = document.querySelector("#add_retraite");

const lastname = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const age  = document.querySelector("#age");

const lastname_error = document.querySelector("#lastname_error");
const firstname_error = document.querySelector("#firstname_error");
const age_error = document.querySelector("#age_error");

const tbody = document.querySelector("#tbody");

// détection d'évènement 
form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    // Test des noms, prénoms :
    let a = checkstr(lastname, lastname_error)
    let b = checkstr(firstname, firstname_error)

    // Test de l'age
    let c = checkage(age, age_error)

    // Somme des Tests pour la suite du code :
    if ( a === b && b === c && a === c ) {

        // création de la ligne pour l'envoie dans le tab
        const tr = document.createElement("tr");
        
        // création des colonne id, Nom, Prenom, Actions
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");

        // Attribution des données dans chaque td
        //td 1
        let tmpligne = tbody.rows.length;
        tmpligne++;
        td1.innerText = tmpligne 
        
        //td 2
        td2.innerText = lastname.value;

        //td 3
        td3.innerText = firstname.value;

        //td 4
        td4.innerText = age.value;

        //td 5 
        const delete_bouton = document.createElement("button");
        delete_bouton.classList.add("button");
        delete_bouton.innerText = "X";
        delete_bouton.addEventListener("click", function(event) {
            delete_bouton.parentNode.parentNode.remove();
        })

        // Concaténation :
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        td5.append(delete_bouton)
        tr.append(td5)
        tbody.append(tr)
    }


// Fonction capable de déterminer la taille + la présence d'une chaine de caractère 3<= n <= 30
function checkstr(field, field_error) {
    if (field.value.length >= 3 &&  field.value.length <= 30) {
        console.log("IS OK", field.value, field_error.value)
        field_error.innerHTML = ""
        return true
    } else {
        console.log("IS KO", field.value, field_error.value)
        field_error.innerHTML = "Veuillez à ce que le nom et le prénom n'excendent pas 30 caractères et qu'il y aient + de 2 caractères"
        return false
    }
}

// Fonction capable de déterminer un entier + la présence de l'age 18 <= n <= 99
function checkage(age, age_error) {
    if ( age.value >= 18 &&  age.value <= 99 ) {
        console.log("IS OK", age.value, age_error.value)
        age_error.innerHTML = ""
        return true
    } else {
        console.log("IS KO", age.value, age_error.value)
        age_error.innerHTML = "Veuillez à ce que l'age soit supérieur à 18 ans et inférieur a 100ans"
        return false
    }
}
});