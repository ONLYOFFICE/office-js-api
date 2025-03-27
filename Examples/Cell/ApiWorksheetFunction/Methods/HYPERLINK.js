let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.HYPERLINK("https://example.com/files/example.xlsx", "Click here"));