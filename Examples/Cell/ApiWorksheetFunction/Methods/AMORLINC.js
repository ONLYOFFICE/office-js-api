// This example shows how to return the prorated linear depreciation of an asset for each accounting period.

// How to get a prorated linear depreciation of an asset for each accounting period and display it in the worksheet.

// Get a function that gets prorated linear depreciation of an asset for each accounting period.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AMORLINC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));