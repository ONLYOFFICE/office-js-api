// Calculate a workday date with custom weekend definitions in a spreadsheet.

// How do I find a date by counting workdays with a custom weekend schedule in a spreadsheet?

// Determine a target date based on workdays using custom weekend parameters in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WORKDAY_INTL("9/8/2017", "-20", "0000011", "8/15/2017");

worksheet.GetRange("C1").SetValue(ans);