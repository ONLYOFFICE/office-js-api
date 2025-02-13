// This example cuts a range to the clipboard.
// How to cut a range.
// Get a range, set some value for it and cut it to the clipboard.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is move to the range A3.");
oRange.Cut(oWorksheet.GetRange("A3"));