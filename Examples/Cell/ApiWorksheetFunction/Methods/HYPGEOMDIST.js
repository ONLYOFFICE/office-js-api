// This example shows how to get the hypergeometric distribution.

// How to get a result from a hypergeometric distribution.

// Use a function to get the result of hypergeometric distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPGEOMDIST(2, 3, 3, 12));