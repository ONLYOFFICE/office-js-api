// Return the number of combinations with repetitions for a given number of items in a spreadsheet.

// How to find a number of combinations with repetitions in a spreadsheet.

// Use function to count possible combinations with duplicates for a given number of items in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBINA(7, 2));