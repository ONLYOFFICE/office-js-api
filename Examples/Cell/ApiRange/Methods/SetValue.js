// Set values in a range of cells in a spreadsheet.

// How do I put data into specific cells in a spreadsheet?

// Populate cells with numbers and a formula to calculate their product in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");