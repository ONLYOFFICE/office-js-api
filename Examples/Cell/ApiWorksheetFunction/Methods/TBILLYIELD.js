let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));