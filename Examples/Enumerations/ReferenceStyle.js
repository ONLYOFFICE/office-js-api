// This example gets reference style.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();