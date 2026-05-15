// Check if a number is odd in a spreadsheet.

// How do I determine whether a number is odd or even in a spreadsheet?

// Use a function to filter odd numbers from a set of values in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);