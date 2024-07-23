// This example shows how to get a Range object that represents the rows in the specified range.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("1:3");
for (var i=1; i <= 3; i++) {
	var oRows = oRange.GetRows(i);    
	oRows.SetValue(i);
}
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();