// initialize function called when the script loads
function initialize(){
    cities();
	addColumns(cityPop);
	addEvents();
	clickme();
};

// create a global variable to store city population data
var cityPop

// function to create a table with cities and their populations
function cities(){
	// Define an array of city objects with name and population properties
	cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	// create a table
	var table = document.createElement("table");

	// create a header row
	var headerRow = document.createElement("tr");

	// add the "City" and "Population" columns to the header row
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

	// add the row to the table
	table.appendChild(headerRow);

	// put dataset into the table
	// loop through the cityPop array to add a new row for each city
	for (var i = 0; i < cityPop.length; i++){
		// assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		// add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);

	};

	// append the table to the div with id="mydiv"
    document.querySelector("#mydiv").appendChild(table);
    }

// function to add additional columns to the table
function addColumns(cityPop){
	// select all table row elements and iterate over them
    document.querySelectorAll("tr").forEach(function(row, i){
		// check if the current row is the header row
    	if (i == 0){
			//add a "City Size" header to the header row
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			// define a new variable to store the values of city size
    		var citySize;
			// determine city size category based on population and assign to citySize
			// if city population is less than 100,000, assign "Small" to the citySize
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			// if city population is less than 500,000, assign "Medium" to the citySize
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			// if city population is equal to or greater than 500,000, assign "Large" to the citySize
    		} else {
    			citySize = 'Large';
    		};
			// add a new cell to the row with the city size category
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>'); 
    	};
    });
};

// function to add event listeners to the table
function addEvents(){
	// add a mouseover event listener to the table
	document.querySelector("table").addEventListener("mouseover", function(){
		// initialize an RGB color string
		var color = "rgb(";
		// generate three random numbers for the RGB color
		for (var i=0; i<3; i++){
			// generate a random number between 0 and 255
			var random = Math.round(Math.random() * 255);
			// add the random number to the color string
			color += random;
			// add a comma after the first two numbers
			if (i<2){
				color += ",";
			// add a closing parenthesis after the third
			} else {
				color += ")";
		};
		// change the color of the table to the randomly generated color
		document.querySelector("table").style.color = color;
	};

	// add a click event listener to the table that calls the clickme function
	document.querySelector("table").addEventListener("click", clickme)
	});
};
// create a function to show an alert when the table is clicked
	function clickme(){
		// alert content
		alert('Hey, you clicked me!');
	};

//call the initialize function when the window has loaded
document.addEventListener('DOMContentLoaded',initialize)

// Chapter 3
function jsAjax(){
    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(callback) 
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();