// This example shows how to return the characters from the middle of a text string, given a starting position and length.

// How to get characters from the middle of the string indicating an index and length.

// Use a function to get an array of characters from the middle of a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MID("Online Office", 3, 4));