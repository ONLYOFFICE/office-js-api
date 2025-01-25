let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.MDURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));