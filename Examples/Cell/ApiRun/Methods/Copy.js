// This example reates a copy of the run.
// How to create a text run object and its copy.
// Create an ApiRun and its copy and add it into paragraph.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text that was copied. ");
oParagraph.AddElement(oRun);
var oCopyRun = oRun.Copy();
oParagraph.AddElement(oCopyRun);