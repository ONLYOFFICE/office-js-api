// This example shows how to return the natural logarithm of a complex number.

// How to get the natural logarithm of a comlex numbers.

// Use a function to get the natural logarithm.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMLN("-2+2.5i"));