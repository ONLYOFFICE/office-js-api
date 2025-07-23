// This example shows how to return the current date and time in the MM/dd/yy hh:mm format.

// How to get a current date in the specified format.

// Use a function to get a current date and time in the specified format.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);
