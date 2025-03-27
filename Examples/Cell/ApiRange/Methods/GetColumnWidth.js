// This example shows how to get the column width value.
let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);