// This example adds a line break to the run position and starts the next element from a new line.
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
oRun.AddText("This is the text for the first line. Nothing special.");
oRun.AddLineBreak();
oRun.AddText("This is the text which starts from the beginning of the second line. ");
oRun.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);