const food = [
	{
		name: `McDonalds`,
		price: `affordable`,
	},
	{
		name: `Popeye's Louisiana Kitchen`,
		price: `affordable`,
	},
	{
		name: `Pizza Pizza`,
		price: `affordable`,
	},
	{
		name: `Wings`,
		price: `affordable`, 
	},
	{
		name: `Caribbean Jerk Chicken`,
		price: `affordable`,
	},
	{
		name: `Vietnamese Pho Noodles`,
		price: `affordable`,
	},
	{
		name: `Food Court or Street Food`,
		price: `affordable`,
	},
	{
		name: `Shawarma`,
		price: `affordable`,
	},
	{
		name: `Japanese Ramen Noodle`,
		price: `expensive`,
	},
	{
		name: `Poke Bowls`,
		price: `expensive`,
	},
	{
		name: `Seafood Boil House`,
		price: `expensive`,
	},
	{
		name: `Japanese Sushi Bar`,
		price: `expensive`,
	},
	{
		name: `KEG Steakhouse`,
		price: `expensive`,
	},
	{
		name: `Italian Cuisine`,
		price: `expensive`,
	},
	{
		name: `Korean Barbeque`,
		price: `expensive`,
	},
	{
		name: `Indian Cuisine`,
		price: `expensive`,
	}
]

const activity = [
	{
		name: `Board Games`,
		type: `chillin`,
	},
	{
		name: `Billiards or Dart Hall`,
		type: `chillin`,
	},
	{
		name: `Epic Bar Hopping`,
		type: `chillin`,
	},
	{
		name: `Desserts`,
		type: `chillin`,
	},
	{
		name: `Happy Hour Snacks`,
		type: `chillin`,
	},
	{
		name: `Bubble Tea`,
		type: `chillin`,
	},
	{
		name: `Patio Sessions`,
		type: `chillin`,
	},
	{
		name: `Cafe and Lounge`,
		type: `chillin`,
	},
	{
		name: `Exploring Downtown`,
		type: `date`,
	},
	{
		name: `Bowling`,
		type: `date`,
	},
	{
		name: `Movies`,
		type: `date`,
	},
	{
		name: `Batting Cages`,
		type: `date`,
	},
	{
		name: `Outdoor Mini Golfing`,
		type: `date`,
	},
	{
		name: `Late Night Drives & Music`,
		type: `date`,
	},
	{
		name: `Redemption Arcades`,
		type: `date`,
	},
	{
		name: `Desserts`,
		type: `date`,
	}
]

// Global variable created for appropriate choices. (This is a place to store the selections based on USER choice selection)
const foodAfford = [];
const foodExpensive = [];
const activityChillin = [];
const activityDate = [];

// Global function created for foodAfford. (This function is created so we can grab the foodAfford's new array and generate a random index value so it can be returned to the user.)
function randomIndex(foodAfford) {
	const index = Math.floor(Math.random() * foodAfford.length);
	return foodAfford[index]
}
function randomIndex(foodExpensive) {
	const index = Math.floor(Math.random() * foodExpensive.length);
	return foodExpensive[index]
}
function randomIndex(activityChillin) {
	const index = Math.floor(Math.random() * activityChillin.length);
	return activityChillin[index]
}
function randomIndex(activityDate) {
	const index = Math.floor(Math.random() * activityDate.length);
	return activityDate[index]
}

let foodResult;
let activityResult;
// Function to be used to display/ ammend random results to each question submitted.
function displayResult(choice) {
	$(`.results`).html(
		`<div class="wrapper main">
			<div class="resultsContent">
				<h2>Finally!</h2>
				<p>It's going to be:</p>
				<h3 class ="resultText">"${choice}"</h3>
					<button class="resetButton" aria-hidden="true" title="Reset Button!">
						<a href = "index.html"></a>
						<span class="sr-only visuallyHidden">Start Quiz!</span>Poke me to Reset!
					</button>
			</div>
		</div>`
	)
	$(`.resetButton`).on(`click`, () => {
		// Note: location.reload(true) had to be used to fresh the page. If possible relook into other methods like .remove .empty...
		location.reload(true);
	})
};

$(document).ready(function() {
	// This set of functions are set to make Question One appear on click from the Start button. 
	$(`.heroSubmit`).on(`click`, function (event) {
		event.preventDefault();

		$(`.heroSubmit`).attr(`disabled`, true);
		$(`html, body`).animate ({
			scrollTop: $(`#primQuestion`).offset().top
		}, 1000);

		$(`.questionsOne`).html (
		`<h2>What would you like to do?</h2>
			<p>You only get one try for each question, to discourage additional indecisiveness!</p>
		<div class="inputLabel">
			<input id="food" name="foodActivity" type="radio" value="food" required>
			<label for="food">Food</label>
			<input id="activity" name="foodActivity" type="radio" value="activity" required>
			<label for="activity">Activity</label>
		</div>
		<input id="firstSubmit" class="firstSubmit" type="submit" value="Next!" aria-hidden="true" title="Submit!" required>`
		);

	})

	// This set of functions are set to append the next set of choices based on USER selection from Question One.
	$(`.formOne`).on(`submit`, function (event) {
		event.preventDefault();

		$(`.firstSubmit`).attr(`disabled`, true);
		$(`input`).attr(`disabled`, true);
		$(`html, body`).animate({
			scrollTop: $(`#subQuestion`).offset().top
		}, 1000);

		if ($(`#food:checked`).val()) {
			$(`.questionsTwo`).html(
				`<h2>Next up!</h2>
					<p>Just one more selection!</p>
				<div class="flexAlign">
					<input id="affordable" name="affordableTreat" type="radio" value="affordable" required>
					<label for="affordable">Affordable. Yuss!</label>
					<input id="expensive" name="affordableTreat" type="radio" value="expensive" required>
					<label for="expensive">Treat Yourself! Duh!</label>
				</div>
					<input id="subSubmit" class="subSubmit" name="" type="submit" value="Next!" aria-hidden="true" title="Submit!" required>`
			);

		} else if ($(`#activity:checked`).val()) {
			$(`.questionsTwo`).html(
				`<h2>Bam! Great choice!</h2>
					<p>You're almost there! One more!</p>
					<div class="flexAlign">
						<input id="chillin" name="chillinDate" type="radio" value="chillin" required>
						<label for="chillin">Chillin' Like A Villian?</label>
						<input id="date" name="chillinDate" type="radio" value="date" required>
						<label for="date">Date? Ouuu.</label>
					</div>
						<input id="subSubmit" class="subSubmit" name="" type="submit" value="Next!" aria-hidden="true" title="Submit!" required>`
			);
		}
	})

	// This set of functions are set to generate a random index value from the arrays, based on USER selection.
	$(`.formTwo`).on(`submit`, function(event) {
		// preventDefault behaviour set for submit buttons.
		event.preventDefault();
		
		// Disables input reselection and multiple submissions on submit.
		$(`.subSubmit`).attr(`disabled`, true);
		$(`input`).attr(`disabled`, true);
		// Scroll to element without jQuery plugin.
		$(`html, body`).animate({
			scrollTop: $(`#results`).offset().top
		}, 1000);

		// IF, FOOD && AFFORDABLE are checked. Do the following...
		if ($(`#food:checked`).val() && $(`#affordable:checked`).val()) {
			// RUN a FOR loop-de-loop for the FOOD list...
			for (let i = 0; i < food.length; i++) {
				// IF... FOOD price is equal to the STRING `affordable`...
				if (food[i].price === `affordable`) {
					// GET the FOOD names with the STRING `affordable` and PUSH them into the newly created foodAfford array...
					foodAfford.push(food[i].name);
				}
			}
			// Create a variable and make sure it holds onto whatever FUNCTION it produces from randomIndex(foodAfford).
			foodResult = randomIndex(foodAfford);

			// DISPLAY/ RETURN the random results from the array to: (div/headings/paragraph etc.) // NOTE: Log console.log here to do tests/ debug
			displayResult(foodResult);
			
		// ELSE IF, FOOD && EXPENSIVE are checked. Do the following...
		} else if ($(`#food:checked`).val() && $(`#expensive:checked`).val())	{

			for (let i = 0; i < food.length; i++) {
				if (food[i].price === `expensive`) {
					foodExpensive.push(food[i].name);
				}
			}
			foodResult = randomIndex(foodExpensive);
			displayResult(foodResult);
		}

		// IF, ACTIVITY && CHILLIN are checked. Do the following...
		if ($(`#activity:checked`).val() && $(`#chillin:checked`).val()) {

			for (let i = 0; i < activity.length; i++) {
				if (activity[i].type === `chillin`) {
					activityChillin.push(activity[i].name);
				}
			}
			activityResult = randomIndex(activityChillin);
			displayResult(activityResult);

			// ELSE IF, ACTIVITY && DATE are checked. Do the following...
		} else if ($(`#activity:checked`).val() && $(`#date:checked`).val()) {

			for (let i = 0; i < activity.length; i++) {
				if (activity[i].type === `date`) {
					activityDate.push(activity[i].name);
				}
			}
			activityResult = randomIndex(activityDate);
			displayResult(activityResult);
		}
	});
})
