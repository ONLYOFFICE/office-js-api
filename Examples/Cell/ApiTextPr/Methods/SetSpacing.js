// This example sets the text spacing measured in twentieths of a point.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetSpacing(80);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the spacing set to 4 points (80 twentieths of a point).");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetSpacing.xlsx");
builder.CloseFile();