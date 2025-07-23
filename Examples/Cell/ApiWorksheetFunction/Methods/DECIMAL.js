// This example shows how to convert a text representation of a number in a given base into a decimal number. 

// How to get a decimal value from a text.

// Use function to convert a text value to decimal using base.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DECIMAL(101, 2));