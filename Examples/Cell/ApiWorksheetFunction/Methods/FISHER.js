
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FISHER(0.56);
worksheet.GetRange("B2").SetValue(ans);


