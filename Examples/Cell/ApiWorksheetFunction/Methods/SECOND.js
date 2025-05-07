// This example shows how to return the second, a number from 0 to 59.

// How to get seconds from time.

// Use a function to return seconds from time object.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.SECOND("16:39:35"); 

worksheet.GetRange("C1").SetValue(ans);
