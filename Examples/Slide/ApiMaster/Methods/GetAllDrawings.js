// This example shows how to get an array with all the drawing objects from the slide master.

// How to get all drawings from the master of presentation.

// Get all drawings from the presentation as an array.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oSlide.RemoveAllObjects();
oMaster.AddObject(oDrawing);
var aDrawings = oMaster.GetAllDrawings();
var oPlaceholder = Api.CreatePlaceholder("picture");
aDrawings[0].SetPlaceholder(oPlaceholder);