// This example sets the text properties to the current run.
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
oRun.AddText("This is a sample text with the font size set to 15 points and the font weight set to bold.");
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oRun.SetTextPr(oTextPr);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);