// This example cuts a range to the clipboard.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is move to the range A3.");
range.Cut(worksheet.GetRange("A3"));