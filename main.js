"use strict"

// function renderCoffee(coffee) {
//     var html = '<ul class="coffee">';
//     // html += '<td>' + coffee.id + '</td>';
//     html += '<li>' + coffee.name + '</li>';
//     html += '<li>' + coffee.roast + '</li>';
//     html += '</ul>';
//
//     return html;
// }
function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    html += '<h2>' + coffee.name + '</h2>';
    if(coffee.roast === "light"|| coffee.roast === "medium"|| coffee.roast === "dark"){
        html += '<p>' + coffee.roast + '</p>';
    }

    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var coff of coffees) {
        html += renderCoffee(coff);
    }
    return html;
}



// BELOW IS THE OLD JS USED TO UPDATE COFFEES =============================================



// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

//NEW UPDATED JS THAT FOR SUBMIT AND SEARCH BAR ==================

function updateCoffees() {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = search.value;
    var selectedRoast = roastSelection.value;
    var selectedAll = all.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (coffee.all === selectedAll && coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function createCoffee(inputNewCoffee, inputRoast) {
    var addingCoffeeName = addingCoffee.value;
    var roastAdd = addingRoast.value;


    var addCoffee = {id: coffees.length + 1, name: addingCoffeeName, roast: roastAdd, all: 'all'};

    if (addingCoffeeName === "" || roastAdd === "Select Roast") {
        updateCoffees();
    } else {
        coffees.push(addCoffee);
    }
}

// BELOW IS AN OBJECT THAT ADDED AN ALL VAR TO COFFEE OBJ ===================
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast:'light', all: 'all'},
    {id: 2, name: 'Half City', roast: 'light', all: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', all: 'all'},
    {id: 4, name: 'City', roast: 'medium', all: 'all'},
    {id: 5, name: 'American', roast: 'medium', all: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', all: 'all'},
    {id: 7, name: 'High', roast: 'dark', all: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', all: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', all: 'all'},
    {id: 10, name: 'European', roast: 'dark', all: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', all: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', all: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', all: 'all'},
    {id: 14, name: 'French', roast: 'dark', all: 'all'},
];


// search declarations
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var all = document.querySelector('#roast-selection');

// coffee declarations
var addingCoffee = document.querySelector('#addCoffee');
var addingRoast = document.querySelector('#addRoast-Selection')
var addSubmit = document.querySelector('#submit2');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);




submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    updateCoffees();
});

search.addEventListener('keyup', function () {
    updateCoffees();
});

addSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    createCoffee();
    updateCoffees();
});

roastSelection.addEventListener('change', function (){
    updateCoffees();
});
// OLD JS USED FOR OUR SEARCH FUNCTION =============

// function coffeeSearched(name, array) {
//     var searchResults = [];
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i].name);
//         if (array[i].name.includes(name)) {
//             searchResults.push(array[i]);
//         }
//     }
//     return searchResults;
// }
//
// searchRoast.addEventListener('keyup', function (event){
//    var input = searchRoast.value;
//    console.log(input);
//    let results = coffeeSearched(input, coffees)
//     tbody.innerHTML = renderCoffees(results);
// });

// function addCoffeeObj(inputNewCoffee, inputRoast) {
//     var addingCoffeeName = addingCoffee.value;
//     var roastAdd = addingRoast.value;
//
//
//     var addCoffee = {id: coffees.length + 1, name: addingCoffeeName, roast: roastAdd, all: 'all'};
//
//     if (addingCoffeeName === "" || roastAdd === "Select Roast") {
//         updateCoffees();
//     } else {
//         coffees.push(addCoffee);
//     }
//