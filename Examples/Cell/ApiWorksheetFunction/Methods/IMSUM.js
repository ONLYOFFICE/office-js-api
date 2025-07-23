// This example shows how to return the sum of two complex numbers expressed in the x + yi or x + yj form.

// How to add two complex numbers.

// Use a function to get the sum of two complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));