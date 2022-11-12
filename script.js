let button = document.getElementById("button");
let question_text_id = 0

counter = 0
quesiton_count = 1

let correct_answer1 = "123"
// ---------------- Вопросы и ответы для теста ------------
let question2 = "Текст второго вопроса"
let correct_answer2 = "123"
let question3 = "Текст третьего вопроса"
let correct_answer3 = "123"
// --------------------------------------------------------

button.onclick = function() {

	let answer = document.getElementById('answer').value;
	console.log(answer);

	if (answer === correct_answer1) {

		if (quesiton_count < 3) {
			quesiton_count = quesiton_count + 1
			counter = counter + 1
			var current_counter = "counter" + counter
			eval("var question_text_id = question" + quesiton_count);
			var question_text = document.getElementById("question");
			var counter_selected = document.getElementById(current_counter);
			var y = document.getElementById("log_source");
			var x3 = document.createElement("p");
			x3.className = "correct";
			x3.textContent = "Верно!";
			counter_selected.style.color = "green";
			question_text.innerHTML = question_text_id;
			y.appendChild(x3);
			setTimeout(function() {
    			x3.remove()
			}, 999);
			console.log(quesiton_count);

		}
		else {
				location.replace("finish.html")
			}
		console.log(question_text_id);
	}
	else {
		answer1 = 0;
		var y = document.getElementById("log_source");
		var x3 = document.createElement("p");
		x3.className = "incorrect"
		x3.textContent = "Неверно!";
		y.appendChild(x3);
		setTimeout(function() {
    		x3.remove()
		}, 999);
	}
};
