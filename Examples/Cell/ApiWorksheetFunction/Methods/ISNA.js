let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNA("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNA(255));
worksheet.GetRange("A3").SetValue(func.ISNA("www.example.com"));