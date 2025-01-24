// This example shows how to get a class formatted according to the instructions contained in the format expression.
let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
worksheet.GetRange("A1").SetValue(format);