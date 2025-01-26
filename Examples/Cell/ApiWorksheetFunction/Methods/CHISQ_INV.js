let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CHISQ_INV(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);