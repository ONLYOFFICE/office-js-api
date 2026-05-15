// Resize the text of vertical axis labels on a chart in a document.

// How do I change the font size of the numbers along the vertical axis in a document?

// Make vertical axis labels larger or smaller to improve chart readability in a document.

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
chart.SetVertAxisLabelsFontSize(8);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);