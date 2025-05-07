// This example shows how to return the ratio of the factorial of a sum of numbers to the product of factorials.

// How to get a result from the ratio of the factorial of a sum of numbers to the product of factorials.

// Use a function to find the ratio of the factorial of a sum of numbers to the product of factorials.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.MULTINOMIAL(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 5));