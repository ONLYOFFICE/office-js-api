// This example shows how to get an inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x.

// How to get an inverse of the Fisher transformation.

// Use function to find out an inverse of Fisher transformation.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);


