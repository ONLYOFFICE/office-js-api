let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ODDLPRICE("1/1/2017", "6/1/2019", "12/1/2016", 0.05, 0.09, 100, 2));