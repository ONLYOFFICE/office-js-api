// Convert degrees to radians in a spreadsheet.

// How to get radians from degree in a spreadsheet.

// Use a function to convert degrees to radians in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RADIANS(90));