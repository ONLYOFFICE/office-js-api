// This example shows how to return the error function integrated between the specified lower and upper limits.

// How to get an error function.

// Use function to get an error function set between upper and lower limits.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ERF(-2));