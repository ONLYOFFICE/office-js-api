// Post a reply under an existing cell comment in a spreadsheet.

// How do I attach a follow-up response to a comment already placed on a cell in a spreadsheet?

// Extend a conversation on a cell by adding a reply with an author name to the original comment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
worksheet.GetRange("A3").SetValue("Comment's reply text: ");
worksheet.GetRange("B3").SetValue(reply.GetText());