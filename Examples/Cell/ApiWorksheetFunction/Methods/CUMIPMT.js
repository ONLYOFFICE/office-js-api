let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CUMIPMT(0.1/12, 2*12, 2000, 1, 24, 0));