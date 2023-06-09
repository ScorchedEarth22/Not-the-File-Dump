//Coded instructions for opponent
const a = 'rock';
const b = 'paper';
const c = 'scissors';

//Coded instructions for you
const x = 'rock';
const y = 'paper';
const z = 'scissors';

//Player variables
let player = 0;
let opponent = 0;

//Shape score
const shapeScore = (opMove, plMove) => {
	if (opMove === 'rock') {
		opponent = opponent + 1;
	} else if (opMove === 'paper') {
		opponent = opponent + 2;
	} else if (opMove === 'scissors') {
		opponent === opponent + 3;
	};
	if (plMove === 'rock') {
		player = player + 1;
	} else if (plMove === 'paper') {
		player = player + 2;
	} else if (plMove === 'scissors') {
		player = player + 3;
	};
}

//Outcome score
function outcomeScore(opMove, plMove) {
    if (opMove === 'rock' && plMove === 'rock') {
        player = player + 3;
        opponent = opponent + 3;
    } else if (opMove === 'rock' && plMove === 'paper') {
        player = player + 6;
    } else if (opMove === 'rock' && plMove === 'scissors') {
        opponent = opponent + 6;
    } else if (opMove === 'paper' && plMove === 'rock') {
        opponent = opponent + 6;
    } else if (opMove === 'paper' && plMove === 'paper') {
        player = player + 3;
        opponent = opponent + 3;
    } else if (opMove === 'paper' && plMove === 'scissors') {
        player = player + 6;
    } else if (opMove === 'scissors' && plMove === 'rock') {
        player = player + 6;
    } else if (opMove === 'scissors' && plMove === 'paper') {
        opponent = opponent + 6;
    } else if (opMove === 'scissors' && plMove === 'scissors') {
        player = player + 3;
        opponent = opponent + 3;
    } else {
        console.log('Error: Please imput valid entries');
    }
}

//Final outcome
const finalCountDown = (op, pl) => {
	if (op > pl) {
		return `You lose! You had ${pl} points vs your opponent's ${op} points.`;
	} else if (op < pl) {
		return `You win! You had ${pl} points vs your opponent's ${op} points.`;
	} else if (op === pl) {
		return `You and your opponent tied! You both had ${pl} points.`;
	}
}

//Did the elf lie
const didFriendLie = (op, pl) => {
	if (op > pl) {
		return `Your friend lied; you might want to find better friends.`;
	} else if (op < pl) {
		return `Your friend didn't lie; you won that game easily.`;
	} else if (op === pl) {
		return `Hard to tell if your friend lied; if you win everytime, it would look suspicious.`;
	}
}

//Day #2 Objective:
shapeScore (a, y);
shapeScore (b, x);
shapeScore (c, z);

outcomeScore (a, y);
outcomeScore (b, x);
outcomeScore (c, z);

console.log(finalCountDown(opponent, player));
console.log(didFriendLie(opponent, player));