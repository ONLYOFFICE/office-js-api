// Calculate the price of a security with an irregular first payment period in a spreadsheet.

// How do I find the price of a bond with an odd first period in a spreadsheet?

// Determine the per-$100 value of a security when the first coupon period is irregular in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODDFPRICE("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.05, 0.09, 100, 2));