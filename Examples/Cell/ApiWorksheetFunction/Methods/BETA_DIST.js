let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETA_DIST(0.4, 4, 5, false);
worksheet.GetRange("B2").SetValue(ans);