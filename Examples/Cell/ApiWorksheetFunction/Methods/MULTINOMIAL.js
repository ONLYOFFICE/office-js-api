// Calculate the multinomial coefficient of a set of numbers in a spreadsheet.

// What is the multinomial coefficient value for a group of numbers in a spreadsheet?

// Find the ratio of combined factorial to individual factorials in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MULTINOMIAL(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 5));