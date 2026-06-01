// Determine whether a cell contains text in a spreadsheet.

// How do I check if a cell holds text rather than numbers in a spreadsheet?

// Use a function to filter text values from numeric and empty cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISTEXT(255));
worksheet.GetRange("A2").SetValue(func.ISTEXT("#N/A"));
worksheet.GetRange("A3").SetValue(func.ISTEXT("Online Office"));