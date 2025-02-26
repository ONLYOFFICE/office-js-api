// This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

// How to make text capitalized.

// Make all characters of a text as a capital letter.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetCaps(true);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape set to capital letters using the text properties.");
oParagraph.AddElement(oRun);