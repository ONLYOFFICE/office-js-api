// Test whether a number is greater than a threshold value. The function returns 1 if the number is greater than or equal to the threshold value and 0 otherwise in a spreadsheet.

// How to compare a number with a threshold value in a spreadsheet.

// Use a function to find out whether a value greater than a limit in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.GESTEP(-2, 2));