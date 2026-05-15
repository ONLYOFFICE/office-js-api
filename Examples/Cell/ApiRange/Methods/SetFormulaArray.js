// Apply an array formula to a range of cells in a spreadsheet.

// How do I fill multiple cells with a single shared formula in a spreadsheet?

// Enter one formula that automatically populates an entire block of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");