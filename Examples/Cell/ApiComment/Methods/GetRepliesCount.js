// Count how many replies exist on a comment in a spreadsheet.

// How do I find out the total number of replies attached to a comment in a spreadsheet?

// Retrieve the reply count for a comment to track discussion activity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
worksheet.GetRange("A3").SetValue("Comment replies count: ");
worksheet.GetRange("B3").SetValue(comment.GetRepliesCount());