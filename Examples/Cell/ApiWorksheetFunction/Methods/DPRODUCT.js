// This example shows how to multiply the values in the field (column) of records in the database that match the conditions you specify.

// How to multiply the values under condition.

// Use function to multiply the values from columns if they satisfy a condition.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Product");
oWorksheet.GetRange("B1").SetValue("Identifier");
oWorksheet.GetRange("C1").SetValue("Value");
oWorksheet.GetRange("A2").SetValue("Apple");
oWorksheet.GetRange("B2").SetValue("Price");
oWorksheet.GetRange("C2").SetValue(25);
oWorksheet.GetRange("A3").SetValue("Apple");
oWorksheet.GetRange("B3").SetValue("Quantity");
oWorksheet.GetRange("C3").SetValue(100);
oWorksheet.GetRange("E1").SetValue("Product");
oWorksheet.GetRange("E2").SetValue("Apple");
var oRange1 = oWorksheet.GetRange("A1:C3");
var oRange2 = oWorksheet.GetRange("E1:F2");
oWorksheet.GetRange("E4").SetValue(oFunction.DPRODUCT(oRange1, "Value", oRange2));