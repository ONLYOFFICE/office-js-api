// This example adds a tab stop to the run.

// How to add a tab to a sentence.

// Break two lines of a text run with a tab. 

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.SetFontSize(30);
oRun.AddText("This is just a sample text. After it three tab stops will be added.");
oRun.AddTabStop();
oRun.AddTabStop();
oRun.AddTabStop();
oRun.AddText("This is the text which starts after the tab stops.");
oParagraph.AddElement(oRun);