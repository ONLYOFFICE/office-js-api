// Calculate the hypergeometric distribution probability in a spreadsheet.

// How do I find the probability using a hypergeometric distribution in a spreadsheet?

// Return the hypergeometric distribution value for a statistical analysis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPGEOMDIST(2, 3, 3, 12));