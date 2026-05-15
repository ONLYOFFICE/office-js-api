// Convert text numbers from any base to base 10 format in a spreadsheet.

// What is a text number in a different base expressed as decimal in a spreadsheet?

// Transform your base-encoded text values into regular decimal numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DECIMAL(101, 2));