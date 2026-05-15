// Calculate linear depreciation of an asset across accounting periods in a spreadsheet.

// Use the AMORLINC function to compute straight-line asset value decline in a spreadsheet.

// Insert the depreciation figure into a cell for accounting records in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AMORLINC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));