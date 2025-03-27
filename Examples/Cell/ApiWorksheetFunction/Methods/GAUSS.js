
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);

