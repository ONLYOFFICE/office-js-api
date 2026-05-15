// Calculate how much an asset loses value each period in a spreadsheet.

// What is the depreciation amount for a particular period in a spreadsheet?

// Find the fixed-declining balance depreciation for your assets in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DB(3500, 500, 5, 1, 10));