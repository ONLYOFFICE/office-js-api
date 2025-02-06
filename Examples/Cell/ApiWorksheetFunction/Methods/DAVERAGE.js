// This example shows how to average the values in a field (column) of records in a list or database that match conditions you specify.
// How to find an average from the column values.
// Use function to get the average of the values that match conditions specified.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Age");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue(20);
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("A3").SetValue("Andrew");
oWorksheet.GetRange("B3").SetValue(21);
oWorksheet.GetRange("C3").SetValue(300);
oWorksheet.GetRange("E1").SetValue("Sales");
oWorksheet.GetRange("E2").SetValue(">200");
var oRange1 = oWorksheet.GetRange("A1:C3");
var oRange2 = oWorksheet.GetRange("E1:E2");
oWorksheet.GetRange("E4").SetValue(oFunction.DAVERAGE(oRange1, "Sales", oRange2));