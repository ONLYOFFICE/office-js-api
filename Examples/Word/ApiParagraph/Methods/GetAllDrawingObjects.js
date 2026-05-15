// Retrieve all drawing objects embedded in a paragraph in a document.

// How do I get every drawing from a paragraph in a document?

// Apply bulk visual changes to shapes, images, and charts by collecting all drawings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing1);
let drawing2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
drawing2.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
drawing2.SetSeriesFill(fill, 1, false);
drawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
drawing2.SetHorAxisTitle("Year", 11);
drawing2.SetLegendPos("bottom");
drawing2.SetShowDataLabels(false, false, true, false);
drawing2.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(drawing2);
let drawings = paragraph.GetAllDrawingObjects();
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
drawings[0].Fill(fill);