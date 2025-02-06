// This example gets a double strikeout property of a text.
// How to find out whether a text is stroke out with double lines or not.
// Get a text double cross out property.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
var oTextPr = oRun.GetTextPr();
oTextPr.SetDoubleStrikeout(true);
oParagraph = Api.CreateParagraph();
var bDoubleStrikeout = oTextPr.GetDoubleStrikeout();
oParagraph.AddText("Double strikeout property: " + bDoubleStrikeout);
oDocContent.Push(oParagraph);