// This example copies a range to the specified range.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is copied to the range A3.");
oRange.Copy(oWorksheet.GetRange("A3"));