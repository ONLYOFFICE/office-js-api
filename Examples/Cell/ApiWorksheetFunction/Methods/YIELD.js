let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));