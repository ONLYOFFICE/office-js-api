// This example shows how to return a subtotal in a list or database.

// How to calculate a subtotal.

// Use a function to estimate a subtotal from the list.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SUBTOTAL(9, 10, 30, 50, 5));