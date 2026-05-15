// Round any number down to the nearest integer or multiple, regardless of sign in a spreadsheet.

// How do I round down negative numbers consistently in a spreadsheet?

// Always decrease a number to the nearest integer or increment, preserving its direction in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FLOOR_PRECISE(-6.7, 2));