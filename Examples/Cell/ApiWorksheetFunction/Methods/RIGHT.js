// This example shows how to the specified number of characters from the end of a text string.

// How to get characters from the end of a string.

// Use a function to return n characters from the right part of a text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHT("Online Office", 2));