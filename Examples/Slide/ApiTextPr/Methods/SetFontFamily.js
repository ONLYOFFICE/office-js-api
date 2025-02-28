// This example sets all 4 font slots with the specified font family.

// How to change a text font family.

// Get a text property of the run and set its font family.

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
oTextPr.SetFontFamily("Comic Sans MS");
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the font family set to 'Comic Sans MS' using the text properties.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);