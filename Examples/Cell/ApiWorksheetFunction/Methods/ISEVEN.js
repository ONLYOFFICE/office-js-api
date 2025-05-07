// This example shows how to return true if a number is even. 

// How to check if the number is even.

// Use a function to check whether a number is even or not.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.ISEVEN("66");
worksheet.GetRange("C3").SetValue(result)
