// Determine accrued interest on coupon bonds up to a settlement date in a spreadsheet.

// How do I calculate accumulated interest on a bond that pays periodic amounts in a spreadsheet?

// Figure out how much interest income a periodic-pay bond has earned by a specific date in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACCRINT("1/1/2018", "6/25/2018", "10/15/2018", "3.50%", 1000, 2));