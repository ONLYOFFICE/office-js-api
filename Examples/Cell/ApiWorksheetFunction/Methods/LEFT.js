// This example shows how to return the specified number of characters from the start of a text string.

// How to find the number of characters starting from the index.

// Use a function to get a length of a text starting from the index.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFT("Online Office", 6));