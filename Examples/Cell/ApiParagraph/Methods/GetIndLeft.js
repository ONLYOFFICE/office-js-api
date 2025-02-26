// This example shows how to get the paragraph left side indentation.
// How to get a left indent of a paragraph.
// Get the left paragraph indent by the side.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.SetIndLeft(2880);
var nIndLeft = oParagraph.GetIndLeft();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Left indent: " + nIndLeft);
oDocContent.Push(oParagraph);