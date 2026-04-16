// Return the average (arithmetic mean) of the specified arguments in a spreadsheet.

// How to find an average (arithmetic mean) in a spreadsheet.

// Use function to get the find an average (arithmetic mean) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGEA(78, 98, 46, 123, 45, true, false);
worksheet.GetRange("B2").SetValue(ans);