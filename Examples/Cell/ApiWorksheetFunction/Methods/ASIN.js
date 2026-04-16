// Return the arcsine of a number in radians, in the range from Pi/2 to Pi/2 in a spreadsheet.

// How to get an arcsine of a number in radians in a spreadsheet.

// Use function to get an arcsine of a number and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));