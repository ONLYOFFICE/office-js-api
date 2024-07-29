// This example updates all tables of figures in the current document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
oParagraph.AddCaption(" - Financial Overview", "Figure", false, "Arabic", false, undefined, "hyphen");
var oTofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
oDocument.AddTableOfFigures(oTofPr);
oParagraph = Api.CreateParagraph();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDocument.AddElement(2, oParagraph);
oParagraph.AddCaption(" - Sample shape", "Figure", false, "Arabic", false, undefined, "hyphen");
oDocument.UpdateAllTOF(false);