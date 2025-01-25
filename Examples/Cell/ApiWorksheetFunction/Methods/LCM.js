let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.LCM(4, 6, 8, 8, 12, 24, 2, 1));