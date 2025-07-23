// This example shows how to return the sum-of-years' digits depreciation of an asset for a specified period.

// How to calculate the sum-of-years' digits depreciation.

// Use a function to estimate the sum-of-years' digits depreciation of an asset.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SYD(3500, 500, 5, 3));