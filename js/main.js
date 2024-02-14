/* Main by Yanbing Chen, 2024 */

//initialize function called when the script loads
function initialize(){
    cities();
};

//dataset
//function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
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

    //Table
    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //put dataset into the table
    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);

    };
    //add table to the webpage, you cant put in front of the code
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', "Hello World!");
    //console.log(mydiv)
    document.querySelector("#mydiv").appendChild(table);
    document.querySelector("#mydiv").style.color = 'blue';
    //console.log(mydiv)
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
        });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
        document.querySelector("table").addEventListener('click', clickme);
    }


//call the initialize function when the window has loaded
//window.onload = initialize();
document.addEventListener('DOMContentLoaded',initialize)



    // create column - 1 way 
    //add the "City" column
    //var cityHeader = document.createElement("th");
    //cityHeader.innerHTML = "City";
    //headerRow.appendChild(cityHeader);

    //add the "Population" column
    //var popHeader = document.createElement("th");
    //popHeader.innerHTML = "Population";
    //headerRow.appendChild(popHeader);

    // put dataset into the table - 1 way wrote in loop
        //var tr = document.createElement("tr");
        //var city = document.createElement("td");
        //city.innerHTML = cityPop[i].city; //NOTE DIFFERENT SYNTAX
        //tr.appendChild(city);

        //var pop = document.createElement("td");
        // pop.innerHTML = cityPop[i].population; //NOTE DIFFERENT SYNTAX
        //tr.appendChild(pop);

        //table.appendChild(tr);