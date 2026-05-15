// Convert a number to text using currency format with dollar sign.

// Format numeric values as currency strings with specified decimal places.

// Use the DOLLAR function to convert numbers to formatted currency text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLAR(98.9997, 3));