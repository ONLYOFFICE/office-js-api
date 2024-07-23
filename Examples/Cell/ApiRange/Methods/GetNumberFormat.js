// This example shows how to get a value that represents the format code for the current range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B2");
oRange.SetValue(3);
var sFormat = oRange.GetNumberFormat();
oWorksheet.GetRange("B3").SetValue("Number format: " + sFormat);
builder.SaveFile("xlsx", "GetNumberFormat.xlsx");
builder.CloseFile();