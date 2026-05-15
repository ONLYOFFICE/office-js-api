// Generate a random whole number within a specified range in a spreadsheet.

// How do I pick a random value between two numbers in a spreadsheet?

// Create an unpredictable integer within a minimum and maximum in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RANDBETWEEN(-1, 10));