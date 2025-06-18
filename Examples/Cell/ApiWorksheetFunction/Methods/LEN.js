// This example shows how to return the number of characters in a text string.

// How to get a length of a text.

// Use a function to get length of a string.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.LEN("Online Office"));