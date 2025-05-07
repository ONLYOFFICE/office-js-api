// This example shows how to return the absolute value (modulus) of a complex number.

// How to get the absolute value of the complex number.

// Use a function to get a modulus of the complex number. 

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMABS("-2+2.5i"));