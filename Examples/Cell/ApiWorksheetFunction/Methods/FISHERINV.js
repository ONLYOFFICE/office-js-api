
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.FISHERINV(0.56);
worksheet.GetRange("B2").SetValue(ans);


