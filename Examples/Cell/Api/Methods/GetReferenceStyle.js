// Get reference style in a spreadsheet.

// Get style of a reference in a spreadsheet.

// Insert a reference style into the cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());