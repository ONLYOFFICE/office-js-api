// Style the major horizontal gridlines on a chart in a document.

// How do I change the color and thickness of horizontal gridlines in a document?

// Apply a custom stroke to gridlines so key value levels are easier to trace across the chart in a document.

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
chart.SetMajorHorizontalGridlines(stroke);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);