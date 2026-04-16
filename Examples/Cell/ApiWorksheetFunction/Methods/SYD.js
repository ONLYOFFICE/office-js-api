// Return the sum-of-years' digits depreciation of an asset for a specified period in a spreadsheet.

// How to calculate the sum-of-years' digits depreciation in a spreadsheet.

// Use a function to estimate the sum-of-years' digits depreciation of an asset in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SYD(3500, 500, 5, 3));