// This example gets a class type and pastes it into the presentation.

// How to get a class type of ApiTextPr.

// Retrieve class type of ApiTextPr object and insert it to the slide.

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
oParagraph.SetJc("left");
var sClassType = oTextPr.GetClassType();
oRun.AddText("Class Type = " + sClassType);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);