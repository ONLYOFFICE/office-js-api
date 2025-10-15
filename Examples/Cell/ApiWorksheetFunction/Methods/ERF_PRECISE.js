// This example shows how to return the error function integrated between 0 and the specified lower limit.

// How to get an error function (from 0 to lower).

// Use function to get an error function set between 0 and lower limits.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERF_PRECISE(0.745));