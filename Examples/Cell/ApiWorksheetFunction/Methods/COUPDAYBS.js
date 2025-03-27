let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COUPDAYBS("1/10/2018", "6/15/2019", 4, 1));