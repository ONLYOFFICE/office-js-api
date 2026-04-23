// Set the local time stamp on a comment reply in a spreadsheet.

// How do I update when a comment reply was posted in a spreadsheet?

// Record a new creation time for an existing comment reply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetTime(Date.now());
worksheet.GetRange("A3").SetValue("Comment's reply timestamp: ");
worksheet.GetRange("B3").SetValue(reply.GetTime());