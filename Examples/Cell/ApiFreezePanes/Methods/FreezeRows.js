// This example freezes the the top row.

// How to freeze rows using their indices.

// Get freeze panes and freeze a row using its index.

var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
oFreezePanes.FreezeRows(1);