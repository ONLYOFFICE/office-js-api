// This example shows how to get a type of the ApiBullet class and insert it into the table.

// How to get a class type of a bullet and show it in the sheet.

// Get a class type of an object.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oBullet = Api.CreateNumbering("ArabicParenR", 1);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
oDocContent.Push(oParagraph);
var sClassType = oBullet.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("Class Type = " + sClassType);
oDocContent.Push(oParagraph);