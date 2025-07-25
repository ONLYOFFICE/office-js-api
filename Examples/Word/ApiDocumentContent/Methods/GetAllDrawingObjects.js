// This example shows how to get a collection of drawing objects from the document content.

// Get all drawing objects added to the document.

// How to retrieve all drawing objects and fill with color its first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 95 * 36000, 70 * 36000, 24);
fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph = Api.CreateParagraph();
paragraph.AddDrawing(chart);
let docContent = shape.GetDocContent();
docContent.AddElement(0, paragraph);
let drawings = docContent.GetAllDrawingObjects();
fill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
drawings[0].Fill(fill);