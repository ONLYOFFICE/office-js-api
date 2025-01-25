let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.F_INV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);