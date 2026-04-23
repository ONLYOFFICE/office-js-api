// Select cells by typing their address in a spreadsheet.

// Find and modify a specific block of cells using its coordinates in a spreadsheet?

// Reference any rectangular group to style all cells at once in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");