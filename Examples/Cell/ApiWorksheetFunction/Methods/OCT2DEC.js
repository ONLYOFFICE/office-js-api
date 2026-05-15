// Convert an octal number to decimal in a spreadsheet.

// How do I convert an octal value to decimal in a spreadsheet?

// Change an octal number into its decimal equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2DEC(7777777634));