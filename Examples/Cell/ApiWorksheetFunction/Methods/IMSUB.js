// Return the difference of two complex numbers expressed in the x + yi or x + yj form in a spreadsheet.

// How to substract two complex numbers in a spreadsheet.

// Use a function to get the difference of two complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUB("1+3i", "-2+2.5i"));