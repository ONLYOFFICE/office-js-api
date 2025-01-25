let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));