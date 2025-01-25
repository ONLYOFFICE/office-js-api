
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.HARMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);

