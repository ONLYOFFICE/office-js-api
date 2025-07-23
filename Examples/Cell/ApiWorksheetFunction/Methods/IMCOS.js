// This example shows how to return the cosine of a complex number.

// How to get the cosine.

// Use a function to get the cosine of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOS("-2+2.5i"));