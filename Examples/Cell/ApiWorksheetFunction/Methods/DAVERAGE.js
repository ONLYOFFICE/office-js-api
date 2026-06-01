// Find the average of values in a column where rows meet your criteria in a spreadsheet.

// What is the average value for records matching your filter in a spreadsheet?

// Calculate the mean across filtered rows in a database table in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("B1").SetValue("Age");
worksheet.GetRange("C1").SetValue("Sales");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("B2").SetValue(20);
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("A3").SetValue("Andrew");
worksheet.GetRange("B3").SetValue(21);
worksheet.GetRange("C3").SetValue(300);
worksheet.GetRange("E1").SetValue("Sales");
worksheet.GetRange("E2").SetValue(">200");
let range1 = worksheet.GetRange("A1:C3");
let range2 = worksheet.GetRange("E1:E2");
worksheet.GetRange("E4").SetValue(func.DAVERAGE(range1, "Sales", range2));