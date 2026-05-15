// Calculate the price of a security with an irregular final payment period in a spreadsheet.

// How do I find the price of a bond with an odd last period in a spreadsheet?

// Determine the per-$100 value of a security when the final coupon period is irregular in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODDLPRICE("1/1/2017", "6/1/2019", "12/1/2016", 0.05, 0.09, 100, 2));