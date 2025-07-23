// This example shows how to convert a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.

// How to convert a dollar price from decimal to fraction.

// Use function to get fraction from decimal price.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARFR(1.1875, 16));