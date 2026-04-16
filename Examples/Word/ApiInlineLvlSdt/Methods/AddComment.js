// Add a comment to the inline content control in a document.

// How to comment an inline text element in a document.

// Add the comment and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddComment("comment", "John Smith");