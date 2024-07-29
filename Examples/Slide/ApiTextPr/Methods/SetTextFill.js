// This example sets the text fill to the current text run.
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
oTextPr.SetTextFill(oFill);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the black text fill set using the text properties.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);