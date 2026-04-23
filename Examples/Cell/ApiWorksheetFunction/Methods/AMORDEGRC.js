// Calculate asset depreciation using the degressive method for accounting periods in a spreadsheet.

// Determine asset value loss with the AMORDEGRC function in a spreadsheet.

// Record the depreciation amount in a cell for financial tracking in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AMORDEGRC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));