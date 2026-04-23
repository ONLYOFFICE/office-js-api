// Count working days with custom weekend rules in a spreadsheet.

// Calculate business days using a specific weekend pattern in a spreadsheet.

// Exclude custom holidays and weekends from workday calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NETWORKDAYS_INTL("8/1/2017", "9/1/2017", "0000011", "8/16/2017"));