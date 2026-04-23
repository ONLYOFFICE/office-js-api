// Calculate the square root of (number * pi).

// The SQRTPI function returns the square root of the product of a number and pi (3.14159...).

// Get the square root of (5 * pi) and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));