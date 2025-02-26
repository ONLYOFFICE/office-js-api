// This example shows how to get the paragraph right side indentation.

// How to get a right indent of a paragraph.

// Get the right paragraph indent by the side.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.SetJc("right");
oParagraph.SetIndRight(2880);
var nIndRight = oParagraph.GetIndRight();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Right indent: " + nIndRight);
oDocContent.Push(oParagraph);