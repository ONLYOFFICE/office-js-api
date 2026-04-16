// Average the values in a field (column) of records in a list or database that match conditions you specify in a spreadsheet.

// How to find an average from the column values in a spreadsheet.

// Use function to get the average of the values that match conditions specified in a spreadsheet.

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