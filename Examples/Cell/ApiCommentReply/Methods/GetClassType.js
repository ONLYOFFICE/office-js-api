// Check what type of object a comment reply is in a spreadsheet.

// How do I confirm the kind of object returned when working with a comment reply in a spreadsheet?

// Verify the category label assigned to a reply within a comment thread in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
let reply = comment.GetReply();
let type = reply.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);