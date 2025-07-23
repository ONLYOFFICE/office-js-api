// This example shows how to return the number of combinations with repetitions for a given number of items.

// How to find a number of combinations with repetitions.

// Use function to count possible combinations with duplicates for a given number of items.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBINA(7, 2));