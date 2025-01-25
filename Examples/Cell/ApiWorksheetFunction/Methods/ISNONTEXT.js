let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNONTEXT("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNONTEXT(255));
worksheet.GetRange("A3").SetValue(func.ISNONTEXT("Online Office"));