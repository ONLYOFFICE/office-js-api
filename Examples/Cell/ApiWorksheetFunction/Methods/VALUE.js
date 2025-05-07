// This example shows how to convert a text string that represents a number to a number.

// How to get number from a text.

// Use a function to return a number from a string.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.VALUE("$3.50"));