// This example adds a table of figures to the current document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
drawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
drawing.SetHorAxisTitle("Year", 11);
drawing.SetLegendPos("bottom");
drawing.SetShowDataLabels(false, false, true, false);
drawing.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
drawing.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
drawing.SetSeriesFill(fill, 1, false);
paragraph.AddDrawing(drawing);
paragraph.AddCaption(" - Financial Overview", "Figure", false, "Arabic", false, undefined, "hyphen");
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
doc.AddTableOfFigures(tofPr);