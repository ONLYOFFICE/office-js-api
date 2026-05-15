// Adjust the height of a row to a specific size in a spreadsheet.

// How do I make a row taller or shorter in a spreadsheet?

// Resize a row to fit content or improve the visual layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);