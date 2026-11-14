// Summarize numbers while skipping errors and hidden rows in a spreadsheet.

// Use the AGGREGATE function to calculate totals with filtering options in a spreadsheet.

// Sum a range with option 7, which skips the error value and the hidden row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(10);
worksheet.GetRange("A2").SetValue(30);
worksheet.GetRange("A3").SetValue("=1/0");
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(5);
worksheet.GetRange("A4").GetEntireRow().SetHidden(true);
let func = Api.WorksheetFunction;
worksheet.GetRange("C1").SetValue(func.AGGREGATE(9, 7, worksheet.GetRange("A1:A5")));