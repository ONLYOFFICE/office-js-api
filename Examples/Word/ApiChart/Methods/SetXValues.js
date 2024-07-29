// This example sets the x-axis values to all chart series. It is used with the scatter charts only.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oChart);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetMarkerFill(oFill, 0, 0, true);
oChart.SetMarkerOutLine(oStroke, 0, 0, true);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetMarkerFill(oFill, 1, 0, true);
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
oChart.SetXValues([2020, 2021, 2022]);