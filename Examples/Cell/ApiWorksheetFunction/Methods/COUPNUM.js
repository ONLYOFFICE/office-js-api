// Calculate the remaining coupon payments until maturity in a spreadsheet.

// What is the count of interest payments you will receive in a spreadsheet?

// Determine how many coupon periods remain from settlement to expiration in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPNUM("1/10/2018", "6/15/2019", 4, 1));