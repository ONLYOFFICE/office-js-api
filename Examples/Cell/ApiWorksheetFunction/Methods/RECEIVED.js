let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RECEIVED("1/1/2017", "6/1/2019", "$10,000.00", "3.75%", 2));