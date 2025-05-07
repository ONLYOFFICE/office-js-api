// This example shows how to return the number of permutations for a given number of objects that can be selected from the total objects.

// How to return the number of permutations for a given number of objects.

// Use a function to claculate the number of permutations.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PERMUT(32, 2));