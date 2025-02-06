// This example shows how to get the ApiRange that represents all the cells on the worksheet.
// How to get all cells.
// Get all cells from the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.GetCells();
oCells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));