// This example specifies the major tick mark for the vertical axis.

// How to set a major tickmark using predefined symbols.

// Create a chart, set its properties and major tickmark for vertical axis.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetVertAxisMajorTickMark("cross");
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetMarkerFill(oFill, 0, 0, true);
oChart.SetMarkerOutLine(oStroke, 0, 0, true);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetMarkerFill(oFill, 1, 0, true);
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
oSlide.AddObject(oChart);