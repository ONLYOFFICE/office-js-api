// This example shows how to multiply the values in the field (column) of records in the database that match the conditions you specify.

// How to multiply the values under condition.

// Use function to multiply the values from columns if they satisfy a condition.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Identifier");
worksheet.GetRange("C1").SetValue("Value");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("B2").SetValue("Price");
worksheet.GetRange("C2").SetValue(25);
worksheet.GetRange("A3").SetValue("Apple");
worksheet.GetRange("B3").SetValue("Quantity");
worksheet.GetRange("C3").SetValue(100);
worksheet.GetRange("E1").SetValue("Product");
worksheet.GetRange("E2").SetValue("Apple");
let range1 = worksheet.GetRange("A1:C3");
let range2 = worksheet.GetRange("E1:F2");
worksheet.GetRange("E4").SetValue(func.DPRODUCT(range1, "Value", range2));