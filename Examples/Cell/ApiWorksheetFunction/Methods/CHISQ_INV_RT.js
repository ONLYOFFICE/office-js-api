let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CHISQ_INV_RT(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);