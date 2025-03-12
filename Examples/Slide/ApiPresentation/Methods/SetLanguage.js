// This example sets a language which will be used to check spelling and grammar.

// How to specify a language of the current presentation.

// Set the 'en-CA' language to the ApiPresentation object.

var oPresentation = Api.GetPresentation();
oPresentation.SetLanguage("en-CA");
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("English (Canada) will be used to check spelling and grammar in this presentation (if requested).");
oSlide.AddObject(oShape);