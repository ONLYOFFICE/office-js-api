// Get the row height value in a spreadsheet.

// How to get a cell row height.

// Get a range and display its row height in the worksheet.

let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);