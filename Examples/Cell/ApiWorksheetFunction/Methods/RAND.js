// Return a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation) in a spreadsheet.

// How to get a number between 0 and 1 in a spreadsheet.

// Use a function to return a random value more or equal to zero and less than one in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RAND());