// Assign a user identifier to the author of a comment reply in a spreadsheet.

// How do I change which user is credited as the author of a comment reply in a spreadsheet?

// Update the author identity linked to an existing comment reply in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetUserId("uid-2");
worksheet.GetRange("A3").SetValue("Comment's reply user Id: ");
worksheet.GetRange("B3").SetValue(reply.GetUserId());