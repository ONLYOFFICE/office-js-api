// This example shows how to convert all letters in a text string to lowercase.

// How to make all characters uncapitalized.

// Use a function to make a text string to lowercase.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.LOWER("Day"));
