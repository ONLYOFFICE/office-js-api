// Return the depreciation of an asset for a specified period using the fixed-declining balance method in a spreadsheet.

// How to get the depreciation of an asset for a specified period in a spreadsheet.

// Use function to return the depreciation of an asset for a specified period using the fixed-declining balance method in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DB(3500, 500, 5, 1, 10));