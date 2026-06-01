// Check the top margin distance on your page setup in a spreadsheet.

// Measure the blank space above your printed content in a spreadsheet?

// Show margin dimensions in cells for layout verification in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");