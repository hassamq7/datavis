// Let's draw something

var body = d3.select("body");
var graphics = body.append("svg");

var width = 900;
var height = 600;

graphics.attr("width", width);
graphics.attr("height", height);

/*
graphics.append("circle")
    .attr("r", 15)
    .attr("cx", 20)
    .attr("cy", 20);

graphics.append("rect")
    .attr("x", 40)
    .attr("y", 20)
    .attr("height", 30)
    .attr("width", 50)
graphics.append("line")
    .attr("x1", 100)
    .attr("y1", 50)
    .attr("x2", 180)
    .attr("y2", 10)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);
graphics.append("text")
    .text("I am drawing!")
    .attr("x",190)
    .attr("y",30);

graphics.append("line")
    .attr("x1", 200)
    .attr("y1", 100)
    .attr("x2", 200)
    .attr("y2", 300)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);
graphics.append("line")
    .attr("x1", 200)
    .attr("y1", 300)
    .attr("x2", 400)
    .attr("y2", 300)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);

//histogram
graphics.append("line")
    .attr("x1", 210)
    .attr("y1", 100)
    .attr("x2", 210)
    .attr("y2", 298)
    .attr("stroke", "#000000")
    .attr("stroke-width", 15);

graphics.append("line")
    .attr("x1", 230)
    .attr("y1", 120)
    .attr("x2", 230)
    .attr("y2", 298)
    .attr("stroke", "#000000")
    .attr("stroke-width", 15);


graphics.append("circle")
    .attr("r", 40)
    .attr("cx", 500)
    .attr("cy", 50)
    .style("fill", "#4682B4")
    .style("stroke", "#CCCCCC")
    .style("stroke-width", "3px")
    .style("opacity", "0.5");

//transformation
graphics.append("text")
    .text("I am drawing!")
    .attr("x",190)
    .attr("y",30)
    .attr("text-anchor", "start")
    .attr("transform", "rotate(45)");


graphics.append("text")
    .text("I am drawing!")
    .attr("x",190)
    .attr("y",30)
    .attr("text-anchor", "start")
    .attr("transform", "rotate(45)")
    .attr("transform","translate(100,0)")
    .attr("transform","scale(2,2)");
*/
graphics.append("circle")
    .attr("r",140)
    .attr("cx",75)
    .attr("cy",150)
    .attr("transform","translate(25,-40)")
    .style("fill", "#FF9933")

;
var arc = d3.svg.arc()
    .innerRadius(120)
    .outerRadius(100)
    .startAngle(2)
    .endAngle(4.25);
graphics.append("path")
    .attr("d",arc)
    .attr("transform","translate(100,100)");
graphics.append("circle")
    .attr("r",15)
    .attr("cx",50)
    .attr("cy",50);
graphics.append("circle")
    .attr("r",15)
    .attr("cx",50)
    .attr("cy",50)
    .attr("transform","translate(100)");


