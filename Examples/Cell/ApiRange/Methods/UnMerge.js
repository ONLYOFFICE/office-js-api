// This example splits the selected merged cell range into the single cells.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("A5:E5").UnMerge();
builder.SaveFile("xlsx", "UnMerge.xlsx");
builder.CloseFile();