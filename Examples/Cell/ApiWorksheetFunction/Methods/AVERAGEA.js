let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.AVERAGEA(78, 98, 46, 123, 45, true, false);
worksheet.GetRange("B2").SetValue(ans);