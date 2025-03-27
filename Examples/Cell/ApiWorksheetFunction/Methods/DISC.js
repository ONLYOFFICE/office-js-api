let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DISC("10/15/2018", "1/1/2020", 98, 100, 1));