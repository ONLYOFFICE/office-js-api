// Return the number of permutations for a given number of objects that can be selected from the total objects in a spreadsheet.

// How to return the number of permutations for a given number of objects in a spreadsheet.

// Use a function to claculate the number of permutations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PERMUT(32, 2));