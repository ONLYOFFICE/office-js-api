// This example shows how to get the value without format of the specified range.

// How to get a cell raw value.

// Get a range, get its raw value without format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
let range = worksheet.GetRange("A1");
range.SetValue(format);
let value2 = range.GetValue2();
worksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + value2);