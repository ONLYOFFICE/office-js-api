// Apply a border stroke to the data point markers of a chart series in a document.

// How do I add an outline around chart markers in a document?

// Make data markers stand out by giving their edges a distinct color and thickness in a document.

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
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetMarkerOutLine(stroke, 1, 0, true);