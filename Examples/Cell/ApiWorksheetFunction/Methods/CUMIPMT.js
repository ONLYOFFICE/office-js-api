// This example shows how to get the cumulative interest paid between two periods.

// How to return the cumulative interest paid between two periods.

// Use function to get cumulative interest paid between two periods.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CUMIPMT(0.1/12, 2*12, 2000, 1, 24, 0));