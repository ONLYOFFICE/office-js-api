// Add text and comment to the first paragraph in a document.

// The comment is attached to the paragraph with the specified author name.

// Add a paragraph to the document and comment on it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");