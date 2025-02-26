// This example shows how to return the accrued interest for a security that pays interest at maturity.

// How to get an accrued interest for a security that pays periodic interest at maturity.

// Get a function that gets accrued interest for a security at maturity.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));