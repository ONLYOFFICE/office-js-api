// This example shows how to return the number of combinations for a given number of items.

// How to find a number of combinations.

// Use function to count possible combinations for a given number of items.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COMBIN(67, 7));