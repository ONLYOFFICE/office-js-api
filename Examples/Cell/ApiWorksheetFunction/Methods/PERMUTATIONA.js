// This example shows how to return the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.

// How to return the number of permutations for a given number of objects with duplicates.

// Use a function to claculate the number of permutations including duplicates.

const worksheet = Api.GetActiveSheet();

//method params
let number = 32;
let number_chosen = 2;

worksheet.GetRange("A1").SetValue(number);
worksheet.GetRange("B1").SetValue(number_chosen);

let func = Api.WorksheetFunction;
let ans = func.PERMUTATIONA(number, number_chosen);

worksheet.GetRange("C1").SetValue(ans);
