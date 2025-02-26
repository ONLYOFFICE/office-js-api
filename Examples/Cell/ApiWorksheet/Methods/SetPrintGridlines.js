// This example specifies whether the sheet gridlines must be printed or not.

// How to set whether sheet gridlines should be printed or not.

// Set a boolean value representing whether to print gridlines or not.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintGridlines(true);
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + oWorksheet.GetPrintGridlines());