// Store the creation time of a comment as a UTC timestamp in a spreadsheet.

// How do I record when a comment was created using a universal time value in a spreadsheet?

// Assign a UTC-based creation time to a comment so all users see the same timestamp in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
comment.SetTimeUTC(Date.now());
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());