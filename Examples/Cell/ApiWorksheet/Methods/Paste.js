// This example shows how to paste date from clipboard.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.Paste();
builder.SaveFile("xlsx", "GetRangeByNumber.xlsx");
builder.CloseFile();