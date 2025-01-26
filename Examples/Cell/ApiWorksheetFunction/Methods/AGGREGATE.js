let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));