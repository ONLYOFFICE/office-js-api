// This example creates a new history point.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
oWorksheet.GetRange("A3").SetValue("New history point was just created.");
builder.SaveFile("xlsx", "CreateNewHistoryPoint.xlsx");
builder.CloseFile();