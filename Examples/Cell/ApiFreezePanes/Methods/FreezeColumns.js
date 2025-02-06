// This example freezes the the first column.
// How to freeze columns using their indices.
// Get freeze panes and freeze a column using its index.
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeColumns(1);