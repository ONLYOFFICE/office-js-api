// Calculate the annual yield of a bond or periodic-interest security in a spreadsheet.

// How do I find the yield rate for a bond with regular interest payments in a spreadsheet?

// Determine the annual return rate of a periodic-paying security in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));