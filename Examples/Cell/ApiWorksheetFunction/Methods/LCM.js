// This example shows how to return the least common multiple.

// How to find the least common multiple from the list of numbers.

// Use a function to find out the least common multiple.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.LCM(4, 6, 8, 8, 12, 24, 2, 1));