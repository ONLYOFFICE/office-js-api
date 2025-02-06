// This example shows how to get the page PrintGridlines property which specifies whether the sheet gridlines must be printed or not.
// How to find out whether sheet gridlines should be printed or not.
// Get a boolean value representing whether to print gridlines or not.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintGridlines(true);
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + oWorksheet.GetPrintGridlines());