// This example shows how to replace existing text with new text in a text string.

// How to substitute a substring with another one.

// Use a function to replace a text with another one.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));