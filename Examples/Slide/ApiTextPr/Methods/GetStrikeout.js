// This example shows how to find out whether a text is stroke out with one line.

// How to know whether a text is crossed with one horizontal line.

// Get a text property of the run and find whether it is stroke out or not.

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
oTextPr.SetStrikeout(true);
oSlide.AddObject(oShape);
oParagraph = Api.CreateParagraph();
var bStrikeout = oTextPr.GetStrikeout();
oParagraph.AddText("Strikeout property: " + bStrikeout);
oDocContent.Push(oParagraph);