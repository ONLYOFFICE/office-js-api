let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.YIELDDISC("1/10/2018", "11/20/2019", 90, 100));