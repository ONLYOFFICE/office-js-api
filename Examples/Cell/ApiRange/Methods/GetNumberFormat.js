// This example shows how to get a value that represents the format code for the current range.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B2");
range.SetValue(3);
let format = range.GetNumberFormat();
worksheet.GetRange("B3").SetValue("Number format: " + format);