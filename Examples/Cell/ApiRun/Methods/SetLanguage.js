// This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.
// How to set a language to the text for grammar checking.
// Create a text run object, change its language to English for grammar check.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text language set to English (Canada).");
oRun.SetLanguage("en-CA");
oParagraph.AddElement(oRun);