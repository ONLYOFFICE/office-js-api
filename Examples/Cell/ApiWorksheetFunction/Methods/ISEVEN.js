// Check if a number is even in a spreadsheet.

// How do I determine if a number is even in a spreadsheet?

// Test whether a value is an even number in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)