// This example shows how to return the code number from your computer's character set for the first character in the specified text string.

// How to return the code number from your computer's character set.

// Use function to get a code number from your computer's character set.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CODE("office"));