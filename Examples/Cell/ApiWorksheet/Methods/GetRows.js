// Get the cell range object that represents all the cells on the rows range in a spreadsheet.

// How to get all row cells.

// Get all row cells from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));