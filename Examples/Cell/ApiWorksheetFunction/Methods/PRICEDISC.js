let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.PRICEDISC("1/1/2017", "6/1/2019", 0.05, 105, 1));