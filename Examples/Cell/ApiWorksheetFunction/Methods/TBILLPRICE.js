let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));