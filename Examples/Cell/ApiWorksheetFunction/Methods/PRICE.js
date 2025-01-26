let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PRICE("1/1/2017", "6/1/2019", 0.05, 0.09, 105, 2));