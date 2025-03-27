
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAMMA_INV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);

