let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETA_INV(0.2, 4, 5);
worksheet.GetRange("B2").SetValue(ans);