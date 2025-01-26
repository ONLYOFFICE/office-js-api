let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PPMT(0.1/12, 1, 2*12, 2000, 0));