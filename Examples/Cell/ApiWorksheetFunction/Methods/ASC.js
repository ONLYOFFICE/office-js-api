// This example shows for double-byte character set (DBCS) languages, the function changes full-width (double-byte) characters to half-width (single-byte) characters.
// How to make characters half-width (single-byte) characters.
// Use function to make characters half-width.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASC("text"));