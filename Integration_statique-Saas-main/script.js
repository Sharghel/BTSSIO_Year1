//Grand 1,  :
const liste = document.querySelector("#liste")
const business = document.querySelector("#business")
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
let tmp_button = false

//attribution des valeurs aux li
li1.innerText = "Ma bite"
li2.innerText = "Mes couilles"
li3.innerText = "Mon cul"
console.log("1",tmp_button)
// création du bouton business
business.addEventListener("click", function(event){
    event.preventDefault()
    tmp_button = !tmp_button
    if (tmp_button) {
        ul.append(li1)
        ul.append(li2)
        ul.append(li3)
        liste.append(ul)
    } else {
        ul.remove()
    }
})