// Verify whether a cell contains a numeric value in a spreadsheet.

// How do I check if a cell holds a number in a spreadsheet?

// Use a function to filter cells by numeric content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNUMBER("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNUMBER(255));
worksheet.GetRange("A3").SetValue(func.ISNUMBER("Online Office"));