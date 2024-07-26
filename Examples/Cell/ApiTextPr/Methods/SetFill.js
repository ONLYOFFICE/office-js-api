// This example sets the text color to the current text run.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
oTextPr.SetFill(oFill);
oRun.AddText("This is a text run with the font color set to gray.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetFill.xlsx");
builder.CloseFile();