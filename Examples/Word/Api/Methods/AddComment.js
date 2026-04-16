// Add text and comment to the first paragraph in a document.

// How to add a comment to the paragraph class in a document.

// How to comment on text using the editor API in a document.

// Add a paragraph to the document and comments on it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");