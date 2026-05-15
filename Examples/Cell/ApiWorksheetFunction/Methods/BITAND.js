// Compare two numbers using bitwise AND in a spreadsheet.

// What do two numbers share at the binary level in a spreadsheet?

// Get the common bits between two values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITAND(13, 25));