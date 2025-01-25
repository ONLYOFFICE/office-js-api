// This example shows how to get a value of the specified range.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let value = worksheet.GetRange("A1").GetValue();
worksheet.GetRange("A3").SetValue("Value of the cell A1: ");
worksheet.GetRange("B3").SetValue(value);