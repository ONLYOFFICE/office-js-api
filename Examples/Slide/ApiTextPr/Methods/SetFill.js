// This example sets the text color to the text run.

// How to change a color of a text.

// Get the text properties of the run and color its font.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(50);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oTextPr.SetFill(oFill);
oRun.AddText("This is a text run with the font color set to black using the text properties.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);