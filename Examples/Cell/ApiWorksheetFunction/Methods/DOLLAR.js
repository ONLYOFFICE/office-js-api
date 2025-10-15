// This example shows how to convert a number to text, using a currency format $#.##.

// How to convert a number to text.

// Use function to get text from a number using dollar format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLAR(98.9997, 3));