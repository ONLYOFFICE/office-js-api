// This example shows how to get an object that represents an active cell.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oActiveCell = oWorksheet.GetActiveCell();
oActiveCell.SetValue("This sample text was placed in an active cell.");
builder.SaveFile("xlsx", "GetActiveCell.xlsx");
builder.CloseFile();