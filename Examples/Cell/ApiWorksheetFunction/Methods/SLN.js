// Return the straight-line depreciation of an asset for one period in a spreadsheet.

// How to return the straight-line depreciation of an asset in a spreadsheet.

// Use a function to get the straight-line depreciation of an asset in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SLN(3500, 500, 5));