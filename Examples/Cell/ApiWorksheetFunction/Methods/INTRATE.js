let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.INTRATE("1/1/2018", "11/12/2018", 1000, 1050, 2));