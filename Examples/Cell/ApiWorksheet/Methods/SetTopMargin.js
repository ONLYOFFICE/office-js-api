// Set the top margin width for printed pages in a spreadsheet.

// How do I control the empty space along the top edge when printing in a spreadsheet?

// Determine how much blank space appears between the top page boundary and your data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetTopMargin(25.1);
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");