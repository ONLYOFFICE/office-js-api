// This example specifies whether the sheet gridlines must be displayed or not.
// How to set whether sheet gridlines should be displayed or not.
// Set a boolean value representing whether to display gridlines or not.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
oWorksheet.SetDisplayGridlines(false);