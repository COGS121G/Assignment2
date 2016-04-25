(function(d3) {
  "use strict";

  var data = [
    { name: "Lolita's", rating: 7.5 },
    { name: "Lucha Libre", rating: 8 },
    { name: "Puesto", rating: 9.5 },
    { name: "Rubio's", rating: 4 },
    { name: "Taco Bell", rating: 3 },
    { name: "Taco Stand", rating: 8.5 },
    { name: "Taco's, El Gordo", rating: 9 },
    { name: "Oscar's", rating: 9 },
    { name: "Rigoberto's", rating: 6 },
    { name: "Galaxy Taco", rating: 6.5 },
  ];

  // Defining the margins and chart size
  // See margin conventions for more information
  var margin = {top: 20, right: 10, bottom: 100, left: 40},
      width = 960 - margin.right - margin.left,
      height = 500 - margin.top - margin.bottom;

  var innerWidth  = width  - margin.left - margin.right;
  var innerHeight = height - margin.top  - margin.bottom;

  // TODO: Input the proper values for the scales
  var xScale = d3.scale.ordinal().rangeRoundBands([0, width], .1);
  var yScale = d3.scale.linear().range([height, 0]);
<<<<<<< HEAD
=======

>>>>>>> f403e6ecd4fa62f675f56c13ddf2f6347d870224
  // Define the chart
  var chart = d3
                .select(".chart")
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

   // Render the chart
  xScale.domain(data.map(function (d){ return d.name; }));

  // TODO: Fix the yScale domain to scale with any ratings range
  yScale.domain([0, d3.max(data, function(d) {
        return d.rating;
    })]);
<<<<<<< HEAD


  //console.log("the data is: " + data[1].rating);
=======


  console.log("the data is: " + data[1].rating);
>>>>>>> f403e6ecd4fa62f675f56c13ddf2f6347d870224
  // Note all these values are hard coded numbers
  // TODO:
  // 1. Consume the taco data
  // 2. Update the x, y, width, and height attributes to appropriate reflect this
  chart
    .selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return xScale(d.name) })
    .attr("width", xScale.rangeBand())
    .attr("y", function(d) { return yScale(d.rating) })
    .attr("height", function(d) {return height -yScale(d.rating)});

  // Orient the x and y axis
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");

<<<<<<< HEAD


   // TODO: Append X axis
  chart
        .append("g").attr("class", "x axis")
        .call(xAxis)
        .attr("transform", "translate(0," + height + ")")
        .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

            // TODO: Append Y axis
=======
  // TODO: Append X axis
  chart
        .append("g").attr("class", "x axis")
        .call(xAxis)
        .attr("transform", "translate(0," + height + ")")
        .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

  // TODO: Append Y axis
>>>>>>> f403e6ecd4fa62f675f56c13ddf2f6347d870224
  chart.append("g")
        .attr("class", "y axis")
        .call(yAxis);


  // ASSIGNMENT PART 1B
  // Grab the delphi data from the server
  d3.json("/delphidata", function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    makeDelphiChart(data);
    console.log("Data", data);
  });

})(d3);




makeDelphiChart = function(data) {
var margin = {top: 20, right: 10, bottom: 100, left: 80},
      width = 960 - margin.right - margin.left;

  var innerWidth  = width  - margin.left - margin.right;
  var innerHeight = 500 - margin.top  - margin.bottom;
  var rating = d3.max( data.map(function(d){ return d.sum; }) );


  var xScale = d3.scale.ordinal().rangeRoundBands([0, width], .1);
  var yScale = d3.scale.linear().range([innerHeight, 0]);


  // Define the chart
  var chart = d3
                .select(".chart")
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", innerHeight + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

   // Render the chart
  xScale.domain(data.map(function (d){ return d.gender; }));
  yScale.domain([0, d3.max(data, function(d) {
        return rating;
    })]);

  chart
    .selectAll(".bar")
    .data(data.map(function(d){ 
      return d.sum; }))
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) {
     return ((innerWidth / data.length)*i) + 30; })
    .attr("width", xScale.rangeBand())
    .attr("y", function(d) { 

    return innerHeight - d*(innerHeight/rating); })
    .attr("height", function(d) { return innerHeight*d/rating;  });


  // Orient the x and y axis
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");

  chart
        .append("g").attr("class", "x axis")
        .call(xAxis)
        .attr("transform", "translate(30," + innerHeight + ")")
        .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-1em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );


            // TODO: Append Y axis
  chart.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .attr("transform", "translate(" + 30 + "," + 0 + ")");


};
