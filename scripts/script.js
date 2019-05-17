// 1.) START: USER clicks on button on the HERO page to smooth scroll down to questions.
// 2.) QUESTION ONE: GET the USER to select either FOOD or ACTIVITY.
// 3.) QUESTION TWO(A): IF the USER selects FOOD. GET the USER to select either AFFORDABLE or EXPENSIVE.
// 3b.)RESULT: IF the USER selects either AFFORDABLE or EXPENSIVE. Go to the ARRAY lists for either, GENERATE a random value from the list and return a value for the USER.
// 4.) QUESTION TWO(B): IF the USER selects ACTIVITY. GET the USER to select either CHILLIN' LIKE A VILLIAN or DATE? OUUU.
// 4b.)RESULT: IF the USER selects either CHILLIN' or DATE. Go to the ARRAY lists for either, GENERATE a random value from the list and return a value for the USER.

const food = [
	{
		name: 'McDonalds',
		price: "affordable",
	},
	{
		name: 'Popeye Louisiana Kitchen',
		price: "affordable",
	},
	{
		name: 'Pizza Pizza',
		price: "affordable",
	},
	{
		name: 'Wings',
		price: "affordable", 
	},
	{
		name: 'Vietnamese Pho Noodles',
		price: "affordable",
	},
	{
		name: 'Food Court or Street Food',
		price: "affordable",
	},
	{
		name: 'Shawarma',
		price: "affordable",
	},
	{
		name: 'Japanese Ramen Noodle',
		price: "expensive",
	},
	{
		name: 'Seafood Boil House',
		price: "expensive",
	},
	{
		name: 'Japanese Sushi Bar',
		price: "expensive",
	},
	{
		name: 'KEG Steakhouse',
		price: "expensive",
	},
	{
		name: 'Italian Cuisine',
		price: "expensive",
	},
	{
		name: 'Korean Barbeque',
		price: "expensive",
	},
	{
		name: 'Indian Cuisine',
		price: "expensive",
	}
]

const activity = [
	{
		name: 'Board Games',
		type: "chillin",
	},
	{
		name: 'Pool or Dart Hall',
		type: "chillin",
	},
	{
		name: 'Bar Hopping',
		type: "chillin",
	},
	{
		name: 'Desserts',
		type: "chillin",
	},
	{
		name: 'Happy Hour Snacks',
		type: "chillin",
	},
	{
		name: 'Bubble Tea',
		type: "chillin",
	},
	{
		name: 'Patio Sessions',
		type: "chillin",
	},
	{
		name: 'Exploring Downtown',
		type: "date",
	},
	{
		name: 'Bowling',
		type: "date",
	},
	{
		name: 'Late Night Drives & Music',
		type: "date",
	},
	{
		name: 'Batting Cages',
		type: "date",
	},
	{
		name: 'Outdoor Mini Golfing',
		type: "date",
	},
	{
		name: 'Redemption Arcades',
		type: "date",
	},
	{
		name: 'Desserts',
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

$(document).ready(function(){

	$(`form`).on(`submit`, function(event) {
		// Set a preventDefault behaviour for submit buttons.
		event.preventDefault();

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
			const foodResult = randomIndex(foodAfford);
			// DISPLAY/ RETURN the random results from the array to: (div/headings/paragraph etc.)
			// NOTE: Log console.log here to do tests/ debug
			console.log(foodResult);
		
		// ELSE IF, FOOD && EXPENSIVE are checked. Do the following...
		} else if ($(`#food:checked`).val() && $(`#expensive:checked`).val()) {
			for (let i = 0; i < food.length; i++) {
				if (food[i].price === `expensive`) {
					foodExpensive.push(food[i].name);
				}
			}
			const foodResult = randomIndex(foodExpensive);
			console.log(foodResult);
		}

		// IF, ACTIVITY && CHILLIN are checked. Do the following...
		if ($(`#activity:checked`).val() && $(`#chillin:checked`).val()) {
			for (let i = 0; i < activity.length; i++) {
				if (activity[i].type === `chillin`) {
					activityChillin.push(activity[i].name);
				}
			}

			const activityResult = randomIndex(activityChillin);
			console.log(activityResult);

			// ELSE IF, ACTIVITY && DATE are checked. Do the following...
		} else if ($(`#activity:checked`).val() && $(`#date:checked`).val()) {
			for (let i = 0; i < activity.length; i++) {
				if (activity[i].type === `date`) {
					activityDate.push(activity[i].name);
				}
			}
			const activityResult = randomIndex(activityDate);
			console.log(activityResult);
		}
	})
})