// This example shows how to convert the slides from the current ApiPresentation object into the JSON objects.
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var json = oPresentation.SlidesToJSON(0, 0, true, true, true, true);
var aSlidesFromJSON = Api.FromJSON(json);
var oSlideFromJSON = aSlidesFromJSON[0];
oPresentation.AddSlide(oSlideFromJSON);
var sType = oSlideFromJSON.GetClassType();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oDrawing);
var oDocContent = oDrawing.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Class type = " + sType);