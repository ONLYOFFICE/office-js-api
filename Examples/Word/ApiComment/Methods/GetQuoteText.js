// This example shows how to get the quote text of the comment.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
let quoteText = comments[0].GetQuoteText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment quote text: " + quoteText);
document.Push(paragraph);