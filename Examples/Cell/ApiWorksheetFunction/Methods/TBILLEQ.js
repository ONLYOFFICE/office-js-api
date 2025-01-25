let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TBILLEQ("1/1/2018", "11/20/2018", "8.00%"));