// Add a comment to a paragraph with a specified author in a document.

// How do I attach a comment to a paragraph in a document?

// Annotate a paragraph with reviewer feedback and an author name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");