
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMA_DIST(10, 9, 2, false);
worksheet.GetRange("B2").SetValue(ans);

