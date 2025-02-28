// This example shows how to find out whether a text is capitalized.

// How to know whether text letters are uppercase or not.

// Get a text property of the run and find whether it is capitalized or not.

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
oTextPr.SetCaps(true);
oSlide.AddObject(oShape);
oParagraph = Api.CreateParagraph();
var bCaps = oTextPr.GetCaps();
oParagraph.AddText("Property of the capitalized letters: " + bCaps);
oDocContent.Push(oParagraph);