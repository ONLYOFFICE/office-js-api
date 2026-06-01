// Get the remainder when one number is divided by another in a spreadsheet.

// What is the remainder from division in a spreadsheet?

// Calculate what is left over after dividing two numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MOD(65, 7));