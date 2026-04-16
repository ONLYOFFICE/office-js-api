// Return the annual yield for a discounted security. For example, a Treasury bill in a spreadsheet.

// How to return an annual yield for a discounted security in a spreadsheet.

// Use a function to get an annual yield in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELDDISC("1/10/2018", "11/20/2019", 90, 100));