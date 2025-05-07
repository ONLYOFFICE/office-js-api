// This example shows how to return the true logical value.

// How to get a true value.

// Use a function to return true value.

const worksheet = Api.GetActiveSheet();

let logical1 = 1 > 0;
let logical2 = 2 > 0;

let func = Api.GetWorksheetFunction();
let ans = func.XOR(logical1, logical2); //Works on XOR gate logic

worksheet.GetRange("C1").SetValue(ans);
