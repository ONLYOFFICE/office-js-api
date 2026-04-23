// Change the displayed author name on a comment reply in a spreadsheet.

// How do I update the name shown as the writer of a comment reply in a spreadsheet?

// Replace the existing author label on a reply with a different name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
reply.SetAuthorName("Mark Potato");
worksheet.GetRange("A3").SetValue("Comment's reply author: ");
worksheet.GetRange("B3").SetValue(reply.GetAuthorName());