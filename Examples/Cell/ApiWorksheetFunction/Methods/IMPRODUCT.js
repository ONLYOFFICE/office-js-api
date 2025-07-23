// This example shows how to return the product of the specified complex numbers.

// How to get the result from multiplication of a complex number.

// Use a function to get the result from the product.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));