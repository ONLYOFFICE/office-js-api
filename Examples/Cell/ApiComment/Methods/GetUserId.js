// This example shows how to get the user ID of the comment author.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
worksheet.GetRange("B3").SetValue(comment.GetUserId());