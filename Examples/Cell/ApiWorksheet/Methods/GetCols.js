// This example shows how to get the ApiRange object that represents all the cells on the columns range.

// How to get all column cells.

// Get all column cells from the worksheet.

let worksheet = Api.GetActiveSheet();
let cols = worksheet.GetCols("A1:C1");
cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));