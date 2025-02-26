// This example specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text.

// How to set an inline position of a text.

// Create a text run object, specify its position to move down or up.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text raised 10 half-points.");
oRun.SetPosition(10);
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text lowered 16 half-points.");
oRun.SetPosition(-16);
oParagraph.AddElement(oRun);