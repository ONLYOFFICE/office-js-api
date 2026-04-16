// Create a chart and paste it into the document.

// Create a "bar3D" chart, add it to the paragraph class, and fill its series with the created solid fills in a document.

// How to create the chart object and add it to the first paragraph of the document.

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