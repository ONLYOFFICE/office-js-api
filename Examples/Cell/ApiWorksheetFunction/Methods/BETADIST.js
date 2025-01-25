let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETADIST(0.4, 4, 5);
worksheet.GetRange("B2").SetValue(ans);