// Convert an octal number to hexadecimal in a spreadsheet.

// How do I convert an octal value to hexadecimal in a spreadsheet?

// Change an octal number into its hexadecimal equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.OCT2HEX(7777777634, 4));