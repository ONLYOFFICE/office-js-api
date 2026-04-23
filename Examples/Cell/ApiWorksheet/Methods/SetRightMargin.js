// Set the right margin width for printed pages in a spreadsheet.

// How do I control the empty space along the right edge when printing in a spreadsheet?

// Determine how much blank space appears between your data and the right page boundary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetRightMargin(20.8);
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");