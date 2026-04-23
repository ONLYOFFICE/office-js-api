// Fill the data point markers of a chart series with a solid color in a document.

// How do I change the background color of chart markers in a document?

// Distinguish a data series visually by applying a custom fill to its markers in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
chart.SetMarkerFill(fill, 1, 0, true);
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(128, 128, 128)));
chart.SetMarkerOutLine(stroke, 1, 0, true);