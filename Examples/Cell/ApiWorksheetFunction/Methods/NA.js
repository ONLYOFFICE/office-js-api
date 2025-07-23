// This example shows how to return the N/A error value which means "no value is available".

// How to return the N/A.

// Use a function to get a N/A error value.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);
