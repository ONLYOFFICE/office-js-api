let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNUMBER("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNUMBER(255));
worksheet.GetRange("A3").SetValue(func.ISNUMBER("Online Office"));