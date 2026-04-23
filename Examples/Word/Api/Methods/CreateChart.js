// Insert a 3D bar chart with colored data series into a document.

// How do I add a bar chart with custom series colors to a document?

// Visualize revenue and cost data for multiple years as a colored 3D bar chart in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let solidFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(solidFill, 0, false);
solidFill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(solidFill, 1, false);