let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.AVERAGE(123, 197, 46, 345, 67, 456);
worksheet.GetRange("B2").SetValue(ans);