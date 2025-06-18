// This example shows how to return the average (arithmetic mean) of the specified arguments.

// How to find an average (arithmetic mean).

// Use function to get the find an average (arithmetic mean).

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.AVERAGEA(78, 98, 46, 123, 45, true, false);
worksheet.GetRange("B2").SetValue(ans);