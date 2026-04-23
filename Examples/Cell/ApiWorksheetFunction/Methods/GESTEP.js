// Check if a number is greater than or equal to a threshold value in a spreadsheet.

// How do I test whether a value meets a minimum requirement in a spreadsheet?

// Get a binary result showing if one number exceeds another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GESTEP(-2, 2));