// Shift a number right by a given number of bits in a spreadsheet.

// What happens when you move the binary representation rightward in a spreadsheet?

// Divide a value by moving its bits toward lower positions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITRSHIFT(13, 2));