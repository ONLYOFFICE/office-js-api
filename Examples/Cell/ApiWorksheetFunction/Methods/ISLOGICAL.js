// Test whether a cell contains a logical value (true or false) in a spreadsheet.

// How do I determine if a cell holds a boolean value in a spreadsheet?

// Use a function to distinguish between logical values and other data types in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("66");

let func = Api.WorksheetFunction;
let result = func.ISLOGICAL(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);