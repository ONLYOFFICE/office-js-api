// Return an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64; compound data = 128 in a spreadsheet.

// How to get an integer representing the data type of a value in a spreadsheet.

// Use a function to return the data type of a value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TYPE(255));
worksheet.GetRange("A2").SetValue(func.TYPE(true));
worksheet.GetRange("A3").SetValue(func.TYPE("Online Office"));