let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));