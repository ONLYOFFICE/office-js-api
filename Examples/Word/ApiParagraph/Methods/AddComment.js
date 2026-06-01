// Attach a reviewer comment to a paragraph in a document.

// How do I add an author-attributed comment to a paragraph in a document?

// Annotate a paragraph with feedback that identifies the commenter by name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
paragraph.AddComment("comment", "Jane");