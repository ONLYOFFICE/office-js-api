// This example removes the specified comment replies.

// How to remove replies from the comment.

// Add a comment and replies to it, then remove specified reply and then show replies count.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.AddReply("Reply 1", "John Smith", "uid-1");
comment.AddReply("Reply 2", "John Smith", "uid-1");
comment.RemoveReplies(0, 1, false);
worksheet.GetRange("A3").SetValue("Comment replies count: ");
worksheet.GetRange("B3").SetValue(comment.GetRepliesCount());