// Calculate asset depreciation using the double-declining balance method in a spreadsheet.

// How do I calculate asset depreciation over a specific time period in a spreadsheet?

// Determine the depreciation amount for an asset including partial periods in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VDB(3500, 500, 5, 1, 3, 2, false));