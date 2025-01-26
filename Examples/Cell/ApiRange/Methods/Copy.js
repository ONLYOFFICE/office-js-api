// This example copies a range to the specified range.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is copied to the range A3.");
range.Copy(worksheet.GetRange("A3"));