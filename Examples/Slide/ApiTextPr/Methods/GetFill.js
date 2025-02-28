// This example shows how to find out a text color.

// How to know with which color a text is filled.

// Get a text property of the run and get its font color.

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
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
var oTextPr = oRun.GetTextPr();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oTextPr.SetFill(oFill);
oSlide.AddObject(oShape);
oParagraph = Api.CreateParagraph();
oFill = oTextPr.GetFill();
var sType = oFill.GetClassType();
oParagraph.AddText("Text color type: " + sType);
oDocContent.Push(oParagraph);