const arrayToObject = (arr) => arr.reduce((acc, curr) => ((acc[curr] = null), acc), {});

const App = function _App() {};

App.state = {
	names: {},
	locations: {},
	setNames: (newNames) => {
		App.state.names = newNames;
	},
	setLocations: (newLocations) => {
		App.state.locations = newLocations;
	},
};

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {
		data: App.state.names,
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, {
		data: App.state.locations,
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('#place_name');
	var instances = M.Autocomplete.init(elems, {
		data: App.state.names,
	});
});

// const initializeAutocomplete = (names = {}, locations = {}) => {
// 	console.log(names, locations);
// 	document.addEventListener('DOMContentLoaded', function () {
// 		var elems = document.querySelectorAll('#place_name');
// 		var instances = M.Autocomplete.init(elems, {
// 			data: names,
// 		});
// 	});

// 	document.addEventListener('DOMContentLoaded', function () {
// 		var elems = document.querySelectorAll('#place_location');
// 		var instances = M.Autocomplete.init(elems, {
// 			data: locations,
// 		});
// 	});
// };

let uniqueData = {};
const fetchUniqueAttributeData = async () => {
	axios
		.get('http://localhost:3000/places/unique')
		.then((response) => {
			const { names, locations } = response.data;
			App.state.setNames(arrayToObject(names));
			App.state.setLocations(locations);
			// initializeAutocomplete(arrayToObject(names), arrayToObject(locations));
		})
		.catch((error) => {
			console.log('Oops got an error while fetching unique data', error);
		});
};

fetchUniqueAttributeData();
