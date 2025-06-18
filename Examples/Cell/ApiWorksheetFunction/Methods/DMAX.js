// This example shows how to get the largest number in the field (column) of records in the database that match the conditions you specify.

// How to get the maximum number from the database column that match the conditions you specify.

// Use function to get the maximum number from the database column that satisfies the conditions.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("B1").SetValue("Month");
worksheet.GetRange("C1").SetValue("Sales");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("B2").SetValue("Jan");
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("A3").SetValue("Andrew");
worksheet.GetRange("B3").SetValue("Jan");
worksheet.GetRange("C3").SetValue(300);
worksheet.GetRange("A4").SetValue("Bob");
worksheet.GetRange("B4").SetValue("Jan");
worksheet.GetRange("C4").SetValue(250);
worksheet.GetRange("E1").SetValue("Month");
worksheet.GetRange("E2").SetValue("Jan");
worksheet.GetRange("F1").SetValue("Sales");
worksheet.GetRange("F2").SetValue(">200");
let range1 = worksheet.GetRange("A1:C4");
let range2 = worksheet.GetRange("E1:F2");
worksheet.GetRange("F4").SetValue(func.DMAX(range1, "Sales", range2));