// Determine accrued interest on maturity bonds at settlement in a spreadsheet.

// How do I calculate accumulated interest on a bond paid at final maturity date in a spreadsheet?

// Figure out the total interest earned on a bond from issuance through settlement day in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));