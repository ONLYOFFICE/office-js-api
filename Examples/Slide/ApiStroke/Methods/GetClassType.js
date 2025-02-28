// This example gets a class type and pastes it into the presentation.

// How to get a class type of ApiStroke.

// Retrieve class type of ApiStroke object and insert it to the slide.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(3 * 36000, oFill1);
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
var oDocContent = oShape.GetDocContent();
var sClassType = oStroke.GetClassType();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sClassType);
oSlide.AddObject(oShape);