let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function scoreHome(a) {
    homeScore += a
    homeScoreEl.textContent = homeScore
}
function scoreGuest(a) {
    guestScore += a
    guestScoreEl.textContent = guestScore
}
