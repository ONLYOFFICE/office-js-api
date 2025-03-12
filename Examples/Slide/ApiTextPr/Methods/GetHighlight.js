// This example shows how to find out whether a text is highlighted.

// How to know whether a highlight set to the text.

// Get the text properties of the run and find whether it is highlighted or not.

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
oTextPr.SetHighlight("lightGray");
oSlide.AddObject(oShape);
oParagraph = Api.CreateParagraph();
var sHighlight = oTextPr.GetHighlight();
oParagraph.AddText("Highlight property: " + sHighlight);
oDocContent.Push(oParagraph);