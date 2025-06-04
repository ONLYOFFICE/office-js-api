// This example adds a comment to the document.

// How to comment the document.

// Add comment to the document indicating the author.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
doc.AddComment("This is a comment to the document.", "Jane");