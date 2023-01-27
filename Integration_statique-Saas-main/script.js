//Grand 1,  :
const liste = document.querySelector("#liste")
const business = document.querySelector("#business")
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
let tmp_button = false
//Grand 2, :
const boutton_prix = document.querySelector("#buttonMoisAnnee")
const argent = document.querySelector("#argent")
argent.classList.add("prixMoisDeux")
const argent2 = document.querySelector("#argent2")
argent2.classList.add("prixMoisDeux")
const argent3 = document.querySelector("#argent3")
argent3.classList.add("prixMoisDeux")
const argentSpan = document.createElement("span")
argentSpan.classList.add("prixMoisTrois")
const argentSpan2 = document.createElement("span")
argentSpan2.classList.add("prixMois")
const argentSpan3 = document.createElement("span")
argentSpan3.classList.add("prixMoisTrois")


tmp_argent = false          // flase => Mois, True => Annee
console.log("fin des const", tmp_argent)



//1, attribution des valeurs aux li
li1.innerText = "Ma bite"
li2.innerText = "Mes couilles"
li3.innerText = "Mon cul"

//1, création du bouton business
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


// 2, attribution des valeurs aux Span

boutton_prix.addEventListener("click", function(event) {
    event.preventDefault()
    argent.innerText = " "
    argent2.innerText = " "
    argent3.innerText = " "
    tmp_argent = !tmp_argent
    MaJArgent(tmp_argent)
    const moisboutton = document.querySelector(".moisboutton")
    const anneeboutton = document.querySelector(".anneebutton")
    console.log(moisboutton, anneeboutton)
    if (tmp_argent) {
        anneeboutton.style.display = "inherit"
        moisboutton.style.display = "none"
    } else {
        anneeboutton.style.display = "none"
        moisboutton.style.display = "inherit"
    }
    argent.append(argentSpan)
    argent2.append(argentSpan2)
    argent3.append(argentSpan3)
    argent.append("/month")
    argent2.append("/month")
    argent3.append("/month")
    
})

function MaJArgent(tmp_argent) {
    if (tmp_argent) {
        console.log("dans majargent en vrai")
        argentSpan.innerText = '$50'
        argentSpan2.innerText = '$120'
        argentSpan3.innerText = '$160'
    } else {
        console.log("dans majargent en faux")
        argentSpan.innerText = '$5'
        argentSpan2.innerText = '$12'
        argentSpan3.innerText = '$16'
    }
}
