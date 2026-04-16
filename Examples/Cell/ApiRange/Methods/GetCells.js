// Get a Range object that represents all the cells in the specified range or a specified cell in a spreadsheet.

// How to get range cells.

// Get range cells, fill them with a color and display the result in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));