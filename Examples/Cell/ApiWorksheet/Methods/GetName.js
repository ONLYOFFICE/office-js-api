// This example shows how to get a sheet name.

// How to get name of the sheet.

// Get a sheet name.

let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);