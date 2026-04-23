// Calculate the modified duration of a bond to measure its price sensitivity in a spreadsheet.

// How do I assess how a bond's price will change with interest rate shifts in a spreadsheet?

// Compute the weighted average time to receive a bond's cash flows in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MDURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));