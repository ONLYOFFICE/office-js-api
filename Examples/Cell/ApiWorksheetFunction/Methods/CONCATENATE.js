// This example shows how to combine multiple text strings into one text string.

// How to add multiple text strings into one text string.

// Use function to create one text string from multiple ones.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));