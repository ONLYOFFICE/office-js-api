// This example shows how to get a Fisher transformation.

// How to get a Fisher transformation.

// Use function to find out a Fisher transformation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHER(0.56);
worksheet.GetRange("B2").SetValue(ans);


