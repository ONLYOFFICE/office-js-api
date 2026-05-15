// Convert an angle measurement from degrees to radians in a spreadsheet.

// How do I change an angle from degrees to radians in a spreadsheet?

// Transform a degree value into its radian equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RADIANS(90));