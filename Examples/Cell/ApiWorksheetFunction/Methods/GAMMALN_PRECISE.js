
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMALN_PRECISE(0.5);
worksheet.GetRange("B2").SetValue(ans);

