// This example shows how to return true if a number is odd. 

// How to check if the number is odd.

// Use a function to check whether a number is odd or not.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let result = func.ISODD("94");
worksheet.GetRange("C3").SetValue(result);
