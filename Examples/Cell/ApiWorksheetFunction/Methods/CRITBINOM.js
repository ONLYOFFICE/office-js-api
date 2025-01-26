let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CRITBINOM(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);