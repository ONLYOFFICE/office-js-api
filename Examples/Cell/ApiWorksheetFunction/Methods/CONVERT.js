// Convert a number from one measurement system to another in a spreadsheet.

// How to convert a number from one measurement system to another in a spreadsheet.

// Use function to convert a number from one measurement system to another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONVERT(2, "Ibm", "kg"));