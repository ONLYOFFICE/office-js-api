// This example shows how to return the annual yield for a discounted security. For example, a Treasury bill.

// How to return an annual yield for a discounted security.

// Use a function to get an annual yield.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELDDISC("1/10/2018", "11/20/2019", 90, 100));