// This example sets the italic property to the text character.
// How to make text italic.
// Set italic property of a text.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetItalic(true);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the font set to italicized letters using the text properties.");
oParagraph.AddElement(oRun);