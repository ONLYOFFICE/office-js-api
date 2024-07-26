// This example sets reference style.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
oWorksheet.GetRange("A1").SetValue(Api.GetRefereceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();