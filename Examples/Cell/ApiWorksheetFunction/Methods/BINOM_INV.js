let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BINOM_INV(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);