let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ACCRINTM("1/1/2018", "10/15/2018", "3.50%", 1000, 1));