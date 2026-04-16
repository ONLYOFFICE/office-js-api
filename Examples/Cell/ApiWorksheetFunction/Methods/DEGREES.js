// Convert radians to degrees in a spreadsheet.

// How to convert radians to degrees in a spreadsheet.

// Use function to get degrees from radians in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));