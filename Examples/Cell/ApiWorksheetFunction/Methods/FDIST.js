let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FDIST(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);