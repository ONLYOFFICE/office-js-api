// This example shows how to count nonblank cells in the field (column) of records in the database that match the conditions you specify.

// How to count the non-empty cells containing numbers in the field (column) of records in the database that match the conditions you specify.

// Use function to count numbers from non-empty database records that met a condition specified.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Age");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue(20);
oWorksheet.GetRange("C2").SetValue("n/a");
oWorksheet.GetRange("A3").SetValue("Andrew");
oWorksheet.GetRange("B3").SetValue(21);
oWorksheet.GetRange("C3").SetValue(300);
oWorksheet.GetRange("E1").SetValue("Sales");
oWorksheet.GetRange("E2").SetValue(">200");
var oRange1 = oWorksheet.GetRange("A1:C3");
var oRange2 = oWorksheet.GetRange("E1:E2");
oWorksheet.GetRange("E4").SetValue(oFunction.DCOUNTA(oRange1, "Sales", oRange2));