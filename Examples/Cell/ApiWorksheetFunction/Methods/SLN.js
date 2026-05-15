// Calculate the straight-line depreciation of an asset for one period.

// The SLN function returns depreciation based on initial cost, salvage value, and asset life.

// Get the depreciation amount and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SLN(3500, 500, 5));