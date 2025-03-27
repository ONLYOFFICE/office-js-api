// This example shows how to get the ApiRange that represents all the cells on the worksheet.
let worksheet = Api.GetActiveSheet();
let cells = worksheet.GetCells();
cells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));