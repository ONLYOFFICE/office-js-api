// Get the hypergeometric distribution in a spreadsheet.

// How to get a result from a hypergeometric distribution in a spreadsheet.

// Use a function to get the result of hypergeometric distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPGEOMDIST(2, 3, 3, 12));