// This example shows how to return the straight-line depreciation of an asset for one period.
// How to return the straight-line depreciation of an asset.
// Use a function to get the straight-line depreciation of an asset.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SLN(3500, 500, 5));