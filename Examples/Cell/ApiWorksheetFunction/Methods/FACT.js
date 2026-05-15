// Return the factorial of a number, which is equal to 123 *...* number in a spreadsheet.

// Calculate the factorial of a number.

// Apply FACT function to get the factorial value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACT(123));