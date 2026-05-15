// Style the major vertical gridlines of a chart in a document.

// How do I change the appearance of major vertical gridlines in a document?

// Apply a custom color and weight to vertical reference lines to improve chart readability in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
let stroke = Api.CreateStroke(1 * 15000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMajorVerticalGridlines(stroke);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);