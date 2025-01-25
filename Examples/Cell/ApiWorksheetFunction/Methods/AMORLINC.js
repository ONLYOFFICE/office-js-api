let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.AMORLINC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));