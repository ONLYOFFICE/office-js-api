// This example shows how to get the ApiRange that represents all the cells on the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.GetCells();
oCells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));