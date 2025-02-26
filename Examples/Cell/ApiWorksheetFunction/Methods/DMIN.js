// This example shows how to get the smallest number in the field (column) of records in the database that match the conditions you specify.

// How to get the minimum number from the database column that match the conditions you specify.

// Use function to get the minimum number from the database column that satisfies the conditions.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Month");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue("Jan");
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("A3").SetValue("Andrew");
oWorksheet.GetRange("B3").SetValue("Jan");
oWorksheet.GetRange("C3").SetValue(300);
oWorksheet.GetRange("A4").SetValue("Bob");
oWorksheet.GetRange("B4").SetValue("Jan");
oWorksheet.GetRange("C4").SetValue(250);
oWorksheet.GetRange("E1").SetValue("Month");
oWorksheet.GetRange("E2").SetValue("Jan");
oWorksheet.GetRange("F1").SetValue("Sales");
oWorksheet.GetRange("F2").SetValue(">200");
var oRange1 = oWorksheet.GetRange("A1:C4");
var oRange2 = oWorksheet.GetRange("E1:F2");
oWorksheet.GetRange("F5").SetValue(oFunction.DMIN(oRange1, "Sales", oRange2));