// Update the recorded creation time of a comment in a spreadsheet.

// How do I change when a comment appears to have been created in a spreadsheet?

// Overwrite the original timestamp on a comment with a new time in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp: ");
comment.SetTime(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTime());