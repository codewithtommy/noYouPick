// =============================================================================
// HOW DOES IT WORK?
// 1.) USER is given two choices. Food or Activity
// 2.) After selecting Food or Activity. USER is given another set of choice based on what they chose for the first. 
// 2a.) FOOD: Affordable or Expensive?
// 2b.) ACTIVITY: Chillin' or Date?
// 3.) USER's selection will go into the appropriate array and display a random generated result.
// =============================================================================
const food = [
	{
		name: `McDonalds`,
		price: "affordable",
	},
	{
		name: `Popeye's Louisiana Kitchen`,
		price: "affordable",
	},
	{
		name: `Pizza Pizza`,
		price: "affordable",
	},
	{
		name: `Wings`,
		price: "affordable", 
	},
	{
		name: `Vietnamese Pho Noodles`,
		price: "affordable",
	},
	{
		name: `Food Court or Street Food`,
		price: "affordable",
	},
	{
		name: `Shawarma`,
		price: "affordable",
	},
	{
		name: `Japanese Ramen Noodle`,
		price: "expensive",
	},
	{
		name: `Seafood Boil House`,
		price: "expensive",
	},
	{
		name: `Japanese Sushi Bar`,
		price: "expensive",
	},
	{
		name: `KEG Steakhouse`,
		price: "expensive",
	},
	{
		name: `Italian Cuisine`,
		price: "expensive",
	},
	{
		name: `Korean Barbeque`,
		price: "expensive",
	},
	{
		name: `Indian Cuisine`,
		price: "expensive",
	}
]

const activity = [
	{
		name: `Board Games`,
		type: "chillin",
	},
	{
		name: `Pool or Dart Hall`,
		type: "chillin",
	},
	{
		name: `Bar Hopping`,
		type: "chillin",
	},
	{
		name: `Desserts`,
		type: "chillin",
	},
	{
		name: `Happy Hour Snacks`,
		type: "chillin",
	},
	{
		name: `Bubble Tea`,
		type: "chillin",
	},
	{
		name: `Patio Sessions`,
		type: "chillin",
	},
	{
		name: `Exploring Downtown`,
		type: "date",
	},
	{
		name: `Bowling`,
		type: "date",
	},
	{
		name: `Late Night Drives & Music`,
		type: "date",
	},
	{
		name: `Batting Cages`,
		type: "date",
	},
	{
		name: `Outdoor Mini Golfing`,
		type: "date",
	},
	{
		name: `Redemption Arcades`,
		type: "date",
	},
	{
		name: `Desserts`,
		type: "date",
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

// const results = function (foodResult) {
// 	$(`.results`).html(
// 		`<div class="wrapper main">
// 			<div class="resultsContent">
// 				<h2>Here You Go!</h2>
// 				<p>Looks like it's going to be...</p>
// 				<p class="resultText">${foodResult}</p>
// 			</div>
// 		</div>`
// 	);
// }

function displayResult(foodResult) {
	$(`.results`).html(
		`<div class="wrapper main">
			<div class="resultsContent">
				<h2>Wooo Hoo!</h2>
				<p>Looks like you're going for:</p>
				<h3 class ="resultText">"${foodResult}"</h3>
			</div>
		</div>`
	)
};

$(document).ready(function() {

	// This set of functions are set to append the next set of choices based on USER selection.
	$(`.secondButton`).on(`click`, function(event) {
		event.preventDefault();

		if ($(`#food:checked`).val()) {

			// Prevent the USER from submiting more than once on submit, after selecting FOOD/ ACTIVITY.
			$(`.secondButton`).attr(`disabled`, true);

			$(`.questionsTwo`).html(
			`<h2>Hurry! I'm Hungry!</h2>
			<div class="flexAlign">
				<input id="affordable" name="affordableTreat" type="radio" value="affordable">
				<label for="affordable">Affordable. Yuss!</label>
				<input id="expensive" name="affordableTreat" type="radio" value="expensive">
				<label for="expensive">Treat Yourself! Duh!</label>
			</div>
				<input id="subSubmit" class="subSubmit" name="" type="submit" value="Next!">`
			);
			
		} else if ($(`#activity:checked`).val()) {

			$(`.secondButton`).attr(`disabled`, true);

			$(`.questionsTwo`).html(
			`<h2>Sweet! Let's go!</h2>
			<div class="flexAlign">
				<input id="chillin" name="chillinDate" type="radio" value="chillin">
				<label for="chillin">Chillin' Like A Villian?</label>
				<input id="date" name="chillinDate" type="radio" value="date">
				<label for="date">Date? Ouuu.</label>
			</div>
				<input id="subSubmit" class="subSubmit" name="" type="submit" value="Next!">`
			);
		}
	})

	// This set of functions are set to generate a random index value from the arrays, based on USER selection.
	$(`form`).on(`submit`, function(event) {
		// Set a preventDefault behaviour for submit buttons.
		event.preventDefault();

		// IF, FOOD && AFFORDABLE are checked. Do the following...
		if ($(`#food:checked`).val() && $(`#affordable:checked`).val()) {

			// Prevent the USER from submiting more than once on submit for Questions after selecting FOOD/ AFFORDABLE.
			$(`.subSubmit`).attr(`disabled`, true);

			// RUN a FOR loop-de-loop for the FOOD list...
			for (let i = 0; i < food.length; i++) {
				// IF... FOOD price is equal to the STRING `affordable`...
				if (food[i].price === `affordable`) {
					// GET the FOOD names with the STRING `affordable` and PUSH them into the newly created foodAfford array...
					foodAfford.push(food[i].name);
				}
			}

			// Create a variable and make sure it holds onto whatever FUNCTION it produces from randomIndex(foodAfford).
			const foodResult = randomIndex(foodAfford);

			// DISPLAY/ RETURN the random results from the array to: (div/headings/paragraph etc.) // NOTE: Log console.log here to do tests/ debug
			console.log(foodResult);
			displayResult (foodResult);
		
		// ELSE IF, FOOD && EXPENSIVE are checked. Do the following...
		} else if ($(`#food:checked`).val() && $(`#expensive:checked`).val())	{

			$(`.subSubmit`).attr(`disabled`, true);

			for (let i = 0; i < food.length; i++) {
				if (food[i].price === `expensive`) {
					foodExpensive.push(food[i].name);
				}
			}

			const foodResult = randomIndex(foodExpensive);
			// console.log(foodResult);
			// results(foodResult);
		}

		// IF, ACTIVITY && CHILLIN are checked. Do the following...
		if ($(`#activity:checked`).val() && $(`#chillin:checked`).val()) {

			$(`.subSubmit`).attr(`disabled`, true);

			for (let i = 0; i < activity.length; i++) {
				if (activity[i].type === `chillin`) {
					activityChillin.push(activity[i].name);
				}
			}

			const activityResult = randomIndex(activityChillin);
			// console.log(activityResult);
			// results(activityResult);

			// ELSE IF, ACTIVITY && DATE are checked. Do the following...
		} else if ($(`#activity:checked`).val() && $(`#date:checked`).val()) {

			$(`.subSubmit`).attr(`disabled`, true);

			for (let i = 0; i < activity.length; i++) {
				if (activity[i].type === `date`) {
					activityDate.push(activity[i].name);
				}
			}

			const activityResult = randomIndex(activityDate);
			// console.log(activityResult);
			// results(activityResult);
		}
	})
})