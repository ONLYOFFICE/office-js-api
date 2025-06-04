// This example adds text and comment to the first paragraph.

// How to add a comment to the ApiParagraph class.

// How to comment on text.

// Adds a paragraph to the document and comments on it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");