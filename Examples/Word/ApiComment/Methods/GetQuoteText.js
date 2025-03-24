// This example shows how to get the quote text of the comment.

// How to retrieve a quote text from a comment.

// Get all comments from the presentation and the first one's quote text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let quoteText = comments[0].GetQuoteText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment quote text: " + quoteText);
doc.Push(paragraph);