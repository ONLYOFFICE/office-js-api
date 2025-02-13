// This example clears the range.
// How to clear a content of a range.
// Get a range and remove everything from it.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetValue("1");
oRange.Clear();
oWorksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");