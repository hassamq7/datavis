var width = 900;
var height = 700;

var graphics = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

// Don't forget to change the data file name!
//d3.json("data/europe.json", loadData);
d3.json("data/uk.json", loadData);

function loadData(error, dataset) {
	if (error) {
		console.log(error);
	}
	else {
		console.log(dataset);
		drawData(dataset);
	}
};
var mapProjection = d3.geo.albers()
	.center([2,55])
	.rotate([0,0])
	.scale(4000)
function drawData(dataset) {
	// Draw your data
	//var countries = topojson.feature(dataset,
	//	dataset.objects.countries).features;
	var countries = topojson.feature(dataset,
		dataset.objects.subunits).features;

	var geoPath = d3.geo.path()
		.projection(mapProjection);


	graphics.selectAll("path")
		.on("click", function(region){
			console.log("Clicked on", region);
		});
	graphics.selectAll("path")
		.on("click", zoom);
	//graphics.selectAll("path")
	//	.data(countries)
	//	.enter()
	//	.append("path")
	//	.attr("d", geoPath)
	//	.attr("transform", "translate(50,50)"); //added

	var color = d3.scale.ordinal()
		.range([
			"#c6dbef","#9ecae1","#4292c6",
				"#2171b5", "#08519c", "#08306b"
		]);

	var color = d3.scale.ordinal()
		.domain(["ENG", "SCT", "NIR", "WLS"])
		.range([
			"#dcd","#ddc","#ccd",
				"#cdc", "#08519c", "#08306b"
		]);

	graphics.selectAll("path")
		.data(countries)
		.enter()
		.append("path")
		.attr("d", geoPath)
		//.attr("transform", "translate(50,50)")
		.style("fill", function(subunit){
			return color(subunit.id);
		});

//.style("fill", function(country){
//		return color(country.id);
}

function zoom(region){
	var z = 3; //zoom factor
	console.log("Clicked on", region);
	graphics.attr("transform",
		"translate(" + width / 2 "," + height / 2 + ")"+
		"scale(" + z ")" +
		"translate(" + -width/2 +
}

function loadUserData(error, dataset){
	if (error){
		console.log(error);
	}
	else {
		//console.log(dataset);
		drawUserData(dataset);
	}
}
function drawUserData(dataset){
	// The new visualtion
	for (var i=0; i<dataset.nodes.length; i++){
		var user = dataset.nodes[i];
		var coordinate1 = user.tweets[0].geo.coordinates[1];
		var coordinate2 = user.tweets[0].geo.coordinates[0];
		var coordinates = [coordinate1, coordinate2];
		user.geo = coordinates;
	}

	//var london = [0.1275,51.5072]
	//var coordinates = mapProjection(london)
	//console.log(coordinates)
    //
	//graphics.append("circle")
	//	.attr("cx", coordinates[0])
	//	.attr("cy",coordinates[1])
	//	.attr("r",5);
	graphics.selectAll(".tweet")
		.data(dataset.nodes)
		.enter()
		.append("circle")
		.attr("class", ".tweet")
		.attr("r", 2.5)
		.style("fill", "#800014")
		.attr("transform", mapUser)
	graphics.selectAll(".link")
		.data(dataset.links)
		.enter()
		.append("line")
		.attr("class","link")
		.style("stroke","#999")
		.style("opacity",0.1)
		.attr("x1",function(link){
			var coordinate = dataset.nodes[link.source].geo;
			return mapProjection(coordinate)[0];
		})
		.attr("y1",function(link){
			var coordinate = dataset.nodes[link.source].geo;
			return mapProjection(coordinate)[1];
		})
		.attr("x2",function(link){
			var coordinate = dataset.nodes[link.target].geo;
			return mapProjection(coordinate)[0];
		})
		.attr("y2",function(link){
			var coordinate = dataset.nodes[link.target].geo;
			return mapProjection(coordinate)[1];
		})
}
function mapUser(user) {

	return "translate(" + mapProjection(user.geo) + ")";
}

d3.json("data/usersGraph.json", loadUserData)