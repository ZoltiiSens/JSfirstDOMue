'use strict';

function decreaseScore() {
	score--;
	document.querySelector('#score').textContent = score;
}

function setHeigherScore() {
	if (score > high_score) {
		high_score = score;
		document.querySelector('#high_score').textContent = high_score;
	}
}

function changeNumProps(text) {
	document.querySelector('#num_props').textContent = text;
}

let num = Math.trunc(Math.random() * 10 + 1);
let score = 10;
let high_score = 0;

document.querySelector('#send').addEventListener('click', function () {
	let user_number = Number(document.querySelector('#user_num').value);
	if (score === 0) {
		changeNumProps('you loose!');
	} else if (!user_number || user_number > 10 || user_number < 1)
		changeNumProps('out of range');
	else if (user_number > num) {
		changeNumProps('too high');
		decreaseScore();
	} else if (user_number < num) {
		changeNumProps('too low');
		decreaseScore();
	} else if (user_number === num) {
		changeNumProps('correct!');
		document.querySelector('.number').textContent = num;
		document.querySelector('body').style.backgroundColor =
			'rgba(95, 199, 11, 1)';
		setHeigherScore();
	}
});
document.querySelector('.restart').addEventListener('click', function () {
	num = Math.trunc(Math.random() * 10 + 1);
	score = 10;
	document.querySelector('.number').textContent = '?';
	document.querySelector('#score').textContent = score;
	document.querySelector('body').style.backgroundColor = 'rgb(42, 48, 43)';
	changeNumProps('???');
});
