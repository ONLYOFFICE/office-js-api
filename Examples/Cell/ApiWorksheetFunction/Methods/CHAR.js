// This example shows how to return the character specified by the code number from your computer's character set.

// How to return the character specified by the code number from your computer's character set.

// Use function to return the character specified by the code number from your computer's character set.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHAR(234));