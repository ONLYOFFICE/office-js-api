// This example shows how to multiply all the numbers given as arguments.

// How to return the result after multiplication.

// Use a function to multiply a list of numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PRODUCT(65, 34, 165, 6, 9, 54));
