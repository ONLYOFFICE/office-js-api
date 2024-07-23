// This example creates a blip fill to apply to the object using the selected image as the object background.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateBlipFill("https://api.onlyoffice.com/content/img/docbuilder/examples/icon_DocumentEditors.png", "tile");
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 1, 3 * 36000);
builder.SaveFile("xlsx", "CreateBlipFill.xlsx");
builder.CloseFile();