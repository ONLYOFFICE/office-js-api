// This example shows how to get the quote text of the comment.

// How to get a comment quote.

// Add a comment to the range and display its quote text in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's quote text: ");
worksheet.GetRange("B3").SetValue(comment.GetQuoteText());