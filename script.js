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
		name: 'Japense Sushi Bar',
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
		name: 'Desserts',
		type: "date",
	},
]

$(document).ready(function (){
	console.log(`Pizzaaaa is hawt and ready`);

	$(`form`).on(`submit`, function(event) {

		// STEP ONE: Set a default behaviour for submit buttons removed.
		event.preventDefault();

		// STEP TWO: Capture/ Log the USER's selection, based on either Food/ Activity, Affordable/ Treat, Chillin/ Date. 
		if ($(`#food:checked`).val() && $(`#affordable:checked`).val()){
			console.log(`Food! Affordable!`);
		} else if (($(`#food:checked`).val() && $(`#treatYourself:checked`).val())){
			console.log(`Food! Treat Yourself!`);
		} else if (($(`#activity:checked`).val() && $(`#chillin:checked`).val())){
			console.log(`Activity! Chillin!`);
		} else if (($(`#activity:checked`).val() && $(`#date:checked`).val())){
			console.log(`Activity! Date!`); 
		}


		// QUESTION ONE: USER has to select from Question One. FOOD or ACTIVITY. 
		// USER selects/ on click FOOD... ASK the USER to select if it will be AFFORDABLE or EXPENSIVE.

		// QUESTION ONE(A): IF the USER selects AFFORDABLE. RETURN a random result from an ARRAY that holds AFFORDABLE food places.

		// QUESTION ONE(B): IF the USER selects EXPENSIVE. RETURN a random result from an ARRAY that holds EXPENSIVE food places.

		// QUESTION ONE: USER has to select from Question One. FOOD or ACTIVITY. 
		// USER selects/ on click FOOD... ASK the USER to select if it will be AFFORDABLE or EXPENSIVE.

		// STEP THREE(D): IF the USER selects AFFORDABLE. RETURN a random result from an ARRAY that holds AFFORDABLE food places.


		// STEP: Set and make sure the USER selects at least one choice for each question.
		// & Inform the USER that a selection must be made in order to get a return in result.


		
	})
});
