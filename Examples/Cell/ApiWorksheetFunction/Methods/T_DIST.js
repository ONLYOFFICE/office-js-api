

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.T_DIST(1.5, 10, false);
worksheet.GetRange("B2").SetValue(ans);

