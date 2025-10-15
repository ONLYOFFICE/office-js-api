// This example shows how to return the prorated linear depreciation of an asset for each accounting period.

// How to get a prorated linear depreciation of an asset for each accounting period and display it in the worksheet.

// Get a function that gets prorated linear depreciation of an asset for each accounting period.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AMORLINC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));