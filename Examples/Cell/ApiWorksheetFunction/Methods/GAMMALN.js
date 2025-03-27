
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMALN(0.5);
worksheet.GetRange("B2").SetValue(ans);

