// Retrieve the quoted text associated with a comment in a document.

// How do I get the text passage that a comment refers to in a document?

// Extract the exact excerpt a reviewer highlighted when leaving a comment.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let quoteText = comments[0].GetQuoteText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment quote text: " + quoteText);
doc.Push(paragraph);