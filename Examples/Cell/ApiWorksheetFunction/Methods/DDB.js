// Calculate asset depreciation using the double-declining balance method in a spreadsheet.

// What is the depreciation amount for an asset in a specific period in a spreadsheet?

// Determine how much value your asset loses with accelerated depreciation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DDB(3500, 500, 5, 1, 2));