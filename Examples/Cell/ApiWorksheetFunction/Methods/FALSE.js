// This example shows how to return the false logical value.

// How to get false value.

// Use function to get a boolean false.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FALSE(); //returns false, doesnt require arguments
worksheet.GetRange("C1").SetValue(ans);
