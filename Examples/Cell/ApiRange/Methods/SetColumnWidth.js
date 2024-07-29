// This example sets the width of all the columns in the range.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetColumnWidth(20);