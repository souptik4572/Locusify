document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.autocomplete');
	var instances = M.Autocomplete.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.autocomplete');
	var instances = M.Autocomplete.init(elems, {});
});

let uniqueData = {};
const fetchUniqueAttributeData = async () => {
	axios
		.get('localhost:3000/places/unique')
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log('Oops got an error while fetching unique data', error);
		});
};

fetchUniqueAttributeData();
