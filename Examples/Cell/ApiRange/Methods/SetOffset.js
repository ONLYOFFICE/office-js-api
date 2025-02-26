// This example sets the cell offset.

// How to set an offset of cells.

// Get a range and specify its cells offset.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("Old Range");
var oRange = oWorksheet.GetRange("B3");
oRange.SetOffset(2, 2);
oRange.SetValue("New Range");