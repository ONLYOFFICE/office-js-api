// This example shows how to return the complementary error function integrated between the specified lower limit and infinity.
// How to get the complementary error function (from lower limit and infinity).
// Use function to get a complementary error function set between the specified lower limit and infinity.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ERFC(-2));