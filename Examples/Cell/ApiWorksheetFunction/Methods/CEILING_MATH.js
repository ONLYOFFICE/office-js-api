// Round numbers up to the nearest whole value in a spreadsheet.

// What is the ceiling of a negative or positive number in a spreadsheet?

// Enforce upward rounding regardless of sign in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_MATH(-5.5, 2, 1));