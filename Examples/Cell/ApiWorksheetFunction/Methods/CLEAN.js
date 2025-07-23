// This example shows how to remove all the nonprintable characters from the text.

// How to remove all the nonprintable characters from the text.

// Use function to clean all nonprintable characters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CLEAN("\ntext"));