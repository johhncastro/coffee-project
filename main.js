"use strict"

function renderCoffee(coffee) {
    var html = '<ul class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<li>' + coffee.name + '</li>';
    html += '<li>' + coffee.roast + '</li>';
    html += '</ul>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast:'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchRoast = document.querySelector('#search')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);



function coffeeSearched(name, array) {
    var searchResults = [];
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].name);
        if (array[i].name.includes(name)) {
            searchResults.push(array[i]);
        }
    }
    return searchResults;
}

searchRoast.addEventListener('keyup', function (event){
   var input = searchRoast.value;
   console.log(input);
   let results = coffeeSearched(input, coffees)
    tbody.innerHTML = renderCoffees(results);
});