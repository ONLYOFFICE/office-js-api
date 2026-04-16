// Get a row number for the selected cell in a spreadsheet.

// How to get a cell column index.

// Get a range and display its column number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A9").GetRow();
worksheet.GetRange("A2").SetValue(range.toString());