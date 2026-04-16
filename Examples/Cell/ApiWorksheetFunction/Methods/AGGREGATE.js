// Return an aggregate in a list or database in a spreadsheet.

// How to get an aggregate of a numbers and display it in the worksheet.

// Get a function that gets an aggregate from a list of numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));