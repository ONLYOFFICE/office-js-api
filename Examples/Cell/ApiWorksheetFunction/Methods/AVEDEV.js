let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.AVEDEV(78, 98, 123, 45, 70, 67, 3, 9, 289));