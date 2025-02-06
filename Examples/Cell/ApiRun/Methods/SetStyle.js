// This example sets a style to the run.
// How to style a text.
// Create a text run object, create a text style and apply it.
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oParagraph.AddElement(oRun);
// todo_example in cells we don't have ability to create a style
// var oMyNewRunStyle = oDocument.CreateStyle("My New Run Style", "run");
//var oTextPr = oMyNewRunStyle.GetTextPr();
oRun = Api.CreateRun();
// oRun.SetStyle(oMyNewRunStyle);
oRun.AddText("This is a text run with its own style.");
oParagraph.AddElement(oRun);