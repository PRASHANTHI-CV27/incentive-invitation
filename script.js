const revealButton = document.getElementById("revealButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const invitation = document.getElementById("invitation");
const confetti = document.getElementById("confetti");

revealButton.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");
    invitation.classList.add("show");

    createConfetti();

});


function createConfetti() {

    const pieces = 80;

    for (let i = 0; i < pieces; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.animationDelay = Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            2 + Math.random() * 2 + "s";

        confetti.appendChild(piece);

    }

}