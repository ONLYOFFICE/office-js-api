// Read when a comment was created in universal time in a spreadsheet.

// How do I find out the exact date and time a comment was posted in UTC in a spreadsheet?

// Capture the creation timestamp of a comment in a timezone-neutral format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());