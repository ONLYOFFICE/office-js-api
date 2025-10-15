// This example shows how to convert a text string to all uppercase letters.

// How to make a string characters uppercase.

// Use a function to convert all letters to uppercase.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UPPER("Online Office"));