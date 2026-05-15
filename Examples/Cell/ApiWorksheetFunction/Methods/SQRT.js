// Calculate the square root of a number.

// The SQRT function returns the positive square root of a numeric value.

// Get the square root of 100 and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRT(100));