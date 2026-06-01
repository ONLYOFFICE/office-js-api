// Calculate the annual yield of a discounted security like a Treasury bill in a spreadsheet.

// How do I find the annual yield for a discounted bond or Treasury bill in a spreadsheet?

// Determine the return rate for a discounted security sold at a price below par in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELDDISC("1/10/2018", "11/20/2019", 90, 100));