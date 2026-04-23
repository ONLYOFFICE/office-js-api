// Remove decimal places from a number without rounding in a spreadsheet.

// How do I truncate a number to a specific number of decimal places in a spreadsheet?

// Cut off the decimal portion of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRUNC(3.14159265, 5));