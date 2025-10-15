// This example shows how to return the straight-line depreciation of an asset for one period.

// How to return the straight-line depreciation of an asset.

// Use a function to get the straight-line depreciation of an asset.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SLN(3500, 500, 5));