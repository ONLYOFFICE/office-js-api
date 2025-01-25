let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CONFIDENCE(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);