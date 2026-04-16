// Return the beta probability distribution function in a spreadsheet.

// How to get a result from beta probability distribution function in a spreadsheet.

// Use function to get the beta probability distribution function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETADIST(0.4, 4, 5);
worksheet.GetRange("B2").SetValue(ans);