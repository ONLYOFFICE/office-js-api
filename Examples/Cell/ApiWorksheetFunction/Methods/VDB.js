// This example shows how to return a depreciation of an asset for any specified period, including partial periods, using the double-declining balance method or some other method specified.

// How to estimate depreciation of an asset for any specified period.

// Use a depreciation of an asset for any specified period including partial periods.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VDB(3500, 500, 5, 1, 3, 2, false));