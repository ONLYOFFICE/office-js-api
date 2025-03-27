let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let avg = func.CHIDIST(12, 10);
worksheet.GetRange("B2").SetValue(avg);