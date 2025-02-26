// This example sets an angle to the cell range.

// How to set an orientation of cells.

// Get a range and specify its orientation.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetOrientation("xlUpward");