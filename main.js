"use strict"

function renderCoffee(coffee) {
    var html = '<ul class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<li>' + coffee.name + '</li>';
    html += '<li>' + coffee.roast + '</li>';
    // html += '<li>' + coffee.type + '</li>';
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
    {id: 1, name: 'Light City', roast:'light',type:'All'},
    {id: 2, name: 'Half City', roast: 'light',type:'All'},
    {id: 3, name: 'Cinnamon', roast: 'light',type:'All'},
    {id: 4, name: 'City', roast: 'medium',type:'All'},
    {id: 5, name: 'American', roast: 'medium',type:'All'},
    {id: 6, name: 'Breakfast', roast: 'medium',type:'All'},
    {id: 7, name: 'High', roast: 'dark',type:'All'},
    {id: 8, name: 'Continental', roast: 'dark',type:'All'},
    {id: 9, name: 'New Orleans', roast: 'dark',type:'All'},
    {id: 10, name: 'European', roast: 'dark',type:'All'},
    {id: 11, name: 'Espresso', roast: 'dark',type:'All'},
    {id: 12, name: 'Viennese', roast: 'dark',type:'All'},
    {id: 13, name: 'Italian', roast: 'dark',type:'All'},
    {id: 14, name: 'French', roast: 'dark',type:'All'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


