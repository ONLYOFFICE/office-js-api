// Calculate the natural logarithm of a number in a spreadsheet.

// How do I find the natural logarithm (base e) of a value in a spreadsheet?

// Get the inverse exponential of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LN(23));