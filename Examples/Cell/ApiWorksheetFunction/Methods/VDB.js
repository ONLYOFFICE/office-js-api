// This example shows how to return a depreciation of an asset for any specified period, including partial periods, using the double-declining balance method or some other method specified.

// How to estimate depreciation of an asset for any specified period.

// Use a depreciation of an asset for any specified period including partial periods.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.VDB(3500, 500, 5, 1, 3, 2, false));