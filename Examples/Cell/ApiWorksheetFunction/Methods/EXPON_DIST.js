let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.EXPON_DIST(0.5, 3, false);
worksheet.GetRange("B2").SetValue(ans);