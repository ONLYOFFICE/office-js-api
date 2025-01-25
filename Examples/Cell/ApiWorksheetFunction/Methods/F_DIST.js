let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);