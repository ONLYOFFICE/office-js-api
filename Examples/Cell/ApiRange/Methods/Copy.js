// This example copies a range to the specified range.

// How to create identical range.

// Get a range and create a copy of it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is copied to the range A3.");
range.Copy(worksheet.GetRange("A3"));