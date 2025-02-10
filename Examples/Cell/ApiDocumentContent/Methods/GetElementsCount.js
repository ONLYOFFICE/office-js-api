// This example shows how to get a number of elements in the current document content.
// How to get a number of elements of a shape from a document content.
// Get a shape than count number of elements and display it using paragraph.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("We got the first paragraph inside the shape.");
oParagraph.AddLineBreak();
oParagraph.AddText("Number of elements inside the shape: " + oDocContent.GetElementsCount());
oParagraph.AddLineBreak();
oParagraph.AddText("Line breaks are NOT counted into the number of elements.");