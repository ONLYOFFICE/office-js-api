// Set the UTC time stamp on a comment reply in a spreadsheet.

// How do I store the creation time of a comment reply as a UTC value in a spreadsheet?

// Assign a universal coordinated time to an existing comment reply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetTimeUTC(Date.now());
worksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
worksheet.GetRange("B3").SetValue(reply.GetTimeUTC());