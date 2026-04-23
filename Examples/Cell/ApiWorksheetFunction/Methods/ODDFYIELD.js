// Calculate the yield of a security with an irregular first payment period in a spreadsheet.

// How do I find the yield of a bond with an odd first period in a spreadsheet?

// Determine the annual return rate of a security when the first coupon period is irregular in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODDFYIELD("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.06, 90, 100, 2));