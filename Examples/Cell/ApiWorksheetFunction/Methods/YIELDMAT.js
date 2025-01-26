let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));