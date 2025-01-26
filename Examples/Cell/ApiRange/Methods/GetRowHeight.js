// This example shows how to get the row height value.
let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);