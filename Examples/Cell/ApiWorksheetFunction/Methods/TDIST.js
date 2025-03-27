

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.TDIST(1.5, 10, 1);
worksheet.GetRange("B2").SetValue(ans);

