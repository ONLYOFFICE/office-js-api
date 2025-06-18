// This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.

// How to change language of the text for grammar check.

// Create a new text run and change its language.

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
oRun.AddText("This is a text run with the text language set to English (Canada).");
oParagraph.AddElement(oRun);
oRun.SetLanguage("en-CA");
oSlide.AddObject(oShape);