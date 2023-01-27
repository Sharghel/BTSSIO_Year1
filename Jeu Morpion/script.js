let grid = [null, null, null, null, null, null, null, null, null] 
const cases = document.querySelectorAll(".cases")
const victory = document.querySelector("#resultat")

let turn = false
let test_win = false

let possibiliti = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

cases.forEach(function(case_jeu) {
    case_jeu.addEventListener("click", function() {
        if (grid[case_jeu.dataset.index] == null) {
            if (turn) {
                case_jeu.classList.add("red")
                grid[case_jeu.dataset.index] = "red"
                turn = false
            } else {
                case_jeu.classList.add("blue")
                grid[case_jeu.dataset.index] = "blue"
                turn = true
            }
            if (victoire(grid, test_win)) {
                victory.innerText = "Bravo tu as gagné"
            }
            }
        else {
            console.log("Case déjà prise : refaire svp")
        }
    })
})
function victoire(grid, test_win) {
    possibiliti.forEach(function(possibilitie) {
        if (grid[possibilitie[0]] == grid[possibilitie[1]] && grid[possibilitie[0]] == grid[possibilitie[2]] && grid[possibilitie[0]] != null) {
            test_win = true
        } else {
        }
    })
    return test_win
} 