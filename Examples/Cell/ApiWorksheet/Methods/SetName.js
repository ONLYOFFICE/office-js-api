// This example sets a name to the active sheet.
let worksheet = Api.GetActiveSheet();
worksheet.SetName("sheet 1");
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Worksheet name: ");
worksheet.GetRange("A1").AutoFit(false, true);
worksheet.GetRange("B1").SetValue(name);