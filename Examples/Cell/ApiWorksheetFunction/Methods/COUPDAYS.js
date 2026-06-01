// Calculate the total days in a coupon period in a spreadsheet.

// What is the length of the coupon interval including settlement in a spreadsheet?

// Determine the coupon cycle duration relevant to your transaction in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPDAYS("1/10/2018", "6/15/2019", 4, 1));