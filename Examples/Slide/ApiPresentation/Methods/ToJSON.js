// This example shows how to convert the ApiPresentation object into the JSON object.

// How to convert the presentation object to JSON objects.

// Get JSON representations of each slide from the presentation.

var oPresentation = Api.GetPresentation();
var json = oPresentation.ToJSON(true);
var oPresentationFromJSON = Api.FromJSON(json);
var oSlide = oPresentationFromJSON.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var sType = oPresentationFromJSON.GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);