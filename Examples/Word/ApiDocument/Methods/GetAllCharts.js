// This example shows how to get a collection of chart objects from the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart1 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oChart1);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart1.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart1.SetSeriesFill(oFill, 1, false);
var oChart2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart2.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart2.SetSeriesFill(oFill, 1, false);
oChart2.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart2.SetHorAxisTitle("Year", 11);
oChart2.SetLegendPos("bottom");
oChart2.SetShowDataLabels(false, false, true, false);
oChart2.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart2);
var aCharts = oDocument.GetAllCharts();
var oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
aCharts[1].SetMinorHorizontalGridlines(oStroke);