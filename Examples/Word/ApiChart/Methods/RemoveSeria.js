// Remove a data series from a chart by its position in a document.

// How do I delete one of the data series from a chart in a document?

// Trim a chart down to fewer series when some data is no longer needed in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.RemoveSeria(1);
paragraph.AddLineBreak();
paragraph.AddText("The Estimated Costs series was removed from the current chart.");