// This example shows how to get a number of the comment replies.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
worksheet.GetRange("A3").SetValue("Comment replies count: ");
worksheet.GetRange("B3").SetValue(comment.GetRepliesCount());