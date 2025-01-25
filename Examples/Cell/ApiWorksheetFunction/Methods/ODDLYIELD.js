let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ODDLYIELD("1/1/2017", "6/1/2019", "12/1/2016", 0.06, 90, 100, 2));