// This example cuts a range to the clipboard.

// How to cut a range.

// Get a range, set some value for it and cut it to the clipboard.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is move to the range A3.");
range.Cut(worksheet.GetRange("A3"));