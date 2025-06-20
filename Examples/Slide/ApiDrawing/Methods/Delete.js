// This example shows how to delete a drawing object.

// How to delete a slide drawing.

// Get a slide drawing and delete it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
slide.AddObject(drawing1);

const drawing2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
drawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
drawing2.SetHorAxisTitle("Year", 11);
drawing2.SetLegendPos("bottom");
drawing2.SetShowDataLabels(false, false, true, false);
drawing2.SetTitle("Financial Overview", 13);

fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
drawing2.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
drawing2.SetSeriesFill(fill, 1, false);
slide.AddObject(drawing2);

drawing2.Delete();
const docContent = drawing1.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The chart was deleted from this slide.");
