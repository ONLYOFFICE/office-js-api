// This example gets reference style.

// Get style of a reference.

// Insert a reference style into the cell.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());