// This example executes a provided function once for each cell.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var oRange = oWorksheet.GetRange("A1:C1");
oRange.ForEach(function (range) {
	var sValue = range.GetValue();
	if (sValue != "1") {
		range.SetBold(true);
	}
});
builder.SaveFile("xlsx", "ForEach.xlsx");
builder.CloseFile();