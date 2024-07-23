// This example sets the border to the cell with the parameters specified.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 50);
oWorksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
oWorksheet.GetRange("A2").SetValue("This is a cell with a bottom border");
builder.SaveFile("xlsx", "SetBorders.xlsx");
builder.CloseFile();