// This example adds a comment to the document.
let document = Api.GetDocument(); 
let paragraph = document.GetElement(0); 
paragraph.AddText("This is just a sample text.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
document.AddComment("This is a comment to the document.", "Jane");