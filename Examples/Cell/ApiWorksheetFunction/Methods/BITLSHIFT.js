// Shift a number left by a given number of bits in a spreadsheet.

// What happens when you move the binary representation leftward in a spreadsheet?

// Multiply a value by moving its bits toward higher positions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITLSHIFT(4, 2));