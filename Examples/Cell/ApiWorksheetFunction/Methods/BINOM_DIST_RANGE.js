let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BINOM_DIST_RANGE(60, 0.75, 45, 50));