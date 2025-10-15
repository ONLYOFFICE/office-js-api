// This example shows how to convert text to a number, in a locale-independent way.

// How to get a number from text.

// Use a function to convert a text to a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NUMBERVALUE("2.500,27", ",", "."));