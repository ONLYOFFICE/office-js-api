
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMA(2.7);
worksheet.GetRange("B2").SetValue(ans);

