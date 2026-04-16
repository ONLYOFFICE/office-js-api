// Return the factorial of a number, which is equal to 123 *...* number in a spreadsheet.

// How to calculate a number factorial in a spreadsheet.

// Use function to calculate the factorial of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACT(123));