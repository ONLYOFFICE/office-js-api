// This example shows how to get the ApiRange object that represents all the cells on the rows range.
// How to get all row cells.
// Get all row cells from the worksheet.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));