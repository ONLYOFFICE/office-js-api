// This example shows how to convert a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.

// How to convert a dollar price from farction to decimal.

// Use function to get decimal from fraction price.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARDE(1.03, 16));