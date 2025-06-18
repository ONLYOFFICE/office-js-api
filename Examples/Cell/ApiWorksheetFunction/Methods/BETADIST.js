// This example shows how to return the beta probability distribution function.

// How to get a result from beta probability distribution function.

// Use function to get the beta probability distribution function.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETADIST(0.4, 4, 5);
worksheet.GetRange("B2").SetValue(ans);