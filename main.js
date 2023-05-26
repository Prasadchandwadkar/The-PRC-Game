const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const modal = document.querySelector(".modal");

const scoreboard = {
	player: 0,
	computer: 0,
};

// play

function play(e) {
	reset.style.display = "inline-block";
	const playerChoice = e.target.id;
	const computerChoice = getComputedChoice();
	const winner = getWinner(playerChoice, computerChoice);
	showWinner(winner, computerChoice);
}

function getComputedChoice() {
	const random = Math.random();
	if (random < 0.34) {
		return "rock";
	} else if (random <= 0.67) {
		return "paper";
	} else {
		return "scissor";
	}
}

// winnner

function getWinner(p, c) {
	if (p == c) {
		return "Oops It's Tie";
	} else if (p == "rock") {
		if (c == "paper") {
			return "computer";
		} else {
			return "player";
		}
	} else if (p == "paper") {
		if (c == "scissor") {
			return "computer";
		} else {
			return "player";
		}
	} else if (p == "scissor") {
		if (c == "rock") {
			return "computer";
		} else {
			return "player";
		}
	}
}

function showWinner(winner, computerChoice) {
	if (winner == "player") {
		scoreboard.player++;
		// show model result
		result.innerHTML = `<h1 class = "text-win">Hurrah!You won</h1>
		<i class="fas fa-hand-${computerChoice} fa-10x"></i>
		<p> Computer choose <strong>${computerChoice}</strong></p>`;
	} else if (winner == "computer") {
		scoreboard.computer++;
		// show model result
		result.innerHTML = `<h1 class = "text-lose">opps!You lost</h1>
		<i class="fas fa-hand-${computerChoice} fa-10x"></i>
		<p> Computer Choose <strong>${computerChoice}</strong></p>`;
	} else {
		result.innerHTML = `<h1> ohh! it's Draw</h1>
		<i class="fas fa-hand-${computerChoice} fa-10x"></i>
		<p> Computer Choose <strong>${computerChoice}</strong></p>`;
	}

	// show score
	score.innerHTML = `<p>Player:${scoreboard.player}</p>
	<p>Computer:${scoreboard.computer}</p>`;

	modal.style.display = "block";
}

// reset game

function resetGame() {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
	<p>player:0</p>
	<p>computer:0</p>`;
}

// clear modal
function clearModal(e) {
	if (e.target == modal) {
		modal.style.display = "none";
	}
}

// Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
reset.addEventListener("click", resetGame);
