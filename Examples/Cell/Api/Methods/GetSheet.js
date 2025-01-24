// This example shows how to get an object that represents a sheet.
let worksheet = Api.GetSheet("Sheet1");
worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");