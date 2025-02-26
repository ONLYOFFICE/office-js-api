// This example shows how to return the depreciation of an asset for a specified period using the fixed-declining balance method.

// How to get the depreciation of an asset for a specified period.

// Use function to return the depreciation of an asset for a specified period using the fixed-declining balance method.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DB(3500, 500, 5, 1, 10));