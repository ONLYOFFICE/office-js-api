// This example removes the specified comment replies.
// How to remove replies from the comment.
// Add a comment and replies to it, then remove specified reply and then show replies count.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
oComment.AddReply("Reply 2", "John Smith", "uid-1");
oComment.RemoveReplies(0, 1, false);
oWorksheet.GetRange("A3").SetValue("Comment replies count: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetRepliesCount());