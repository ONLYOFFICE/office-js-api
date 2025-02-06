// This example removes all the elements from the current paragraph.
// How to clear content from the paragraph.
// Create a paragraph add text to it then delete all elements from it.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is the first text run in the current paragraph.");
oParagraph.AddElement(oRun);
oParagraph.RemoveAllElements();
oRun = Api.CreateRun();
oRun.AddText("We removed all the paragraph elements and added a new text run inside it.");
oParagraph.AddElement(oRun);
oDocContent.Push(oParagraph);