// This example shows how to extract from a database a single record that matches the conditions you specify.

// How to get a value from a database range that satisfies a condition.

// Use function to get a record after applying condition.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Month");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue("Jan");
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("A3").SetValue("Alice");
oWorksheet.GetRange("B3").SetValue("Feb");
oWorksheet.GetRange("C3").SetValue(250);
oWorksheet.GetRange("E1").SetValue("Name");
oWorksheet.GetRange("E2").SetValue("Alice");
oWorksheet.GetRange("F1").SetValue("Month");
oWorksheet.GetRange("F2").SetValue("Feb");
var oRange1 = oWorksheet.GetRange("A1:C3");
var oRange2 = oWorksheet.GetRange("E1:F2");
oWorksheet.GetRange("F4").SetValue(oFunction.DGET(oRange1, "Sales", oRange2));