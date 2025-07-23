// This example shows how to return the imaginary coefficient of a complex number.

// How to get the imaginary part of the complex number.

// Use a function to get an imaginary coefficient of the complex number. 

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMAGINARY("-2+2.5i"));