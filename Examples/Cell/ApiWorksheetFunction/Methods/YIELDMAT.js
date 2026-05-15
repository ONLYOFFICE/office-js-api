// Calculate the annual yield of a security that pays interest at maturity in a spreadsheet.

// How do I find the yield of a bond that only pays interest when it matures in a spreadsheet?

// Determine the annual return for a security with a single interest payment at maturity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));