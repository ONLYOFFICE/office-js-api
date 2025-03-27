// This example shows how to get a sheet index.
let worksheet = Api.GetActiveSheet();
let index = worksheet.GetIndex();
worksheet.GetRange("A1").SetValue("Index: ");
worksheet.GetRange("B1").SetValue(index);