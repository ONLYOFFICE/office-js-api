// Add a comment with an author to a document.

// How do I add an authored comment to a document?

// Annotate a document with a reviewer's note tied to a specific author in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
doc.AddComment("This is a comment to the document.", "Jane");