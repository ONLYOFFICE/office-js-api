// This example adds a chart to the run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
let drawing = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
drawing.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
drawing.SetSeriesFill(fill, 1, false);
drawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
drawing.SetHorAxisTitle("Year", 11);
drawing.SetLegendPos("bottom");
drawing.SetShowDataLabels(false, false, true, false);
drawing.SetTitle("Financial Overview", 13);
run.AddDrawing(drawing);
paragraph.AddElement(run);