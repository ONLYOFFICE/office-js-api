// This example inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
oWorksheet.GetRange("C5").SetValue("5");
var oRange = oWorksheet.GetRange("C4");
oRange.Insert("down");
builder.SaveFile("xlsx", "Insert.xlsx");
builder.CloseFile();