const arrayToObject = (arr) => arr.reduce((acc, curr) => ((acc[curr] = null), acc), {});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, {});
});

const initializeAutocomplete = (names = {}, locations = {}) => {
	const elemNames = document.querySelector('#place_name');
	const nameInstances = M.Autocomplete.init(elemNames, {
		data: names,
	});
	const elemLocations = document.querySelector('#place_location');
	const locationInstances = M.Autocomplete.init(elemLocations, {
		data: locations,
	});
};

let uniqueData = {};
const fetchUniqueAttributeData = async () => {
	axios
		.get('http://localhost:3000/places/unique')
		.then((response) => {
			const { names, locations } = response.data;
			initializeAutocomplete(arrayToObject(names), arrayToObject(locations));
		})
		.catch((error) => {
			console.log('Oops got an error while fetching unique data', error);
		});
};

fetchUniqueAttributeData();
