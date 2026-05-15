// Retrieve document metadata and display the application name in a document.

// How do I read document properties like the creating application in a document?

// Add a paragraph showing which application produced the document in a document.

let doc = Api.GetDocument();
let docInfo = doc.GetDocumentInfo();
let paragraph = Api.CreateParagraph();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
doc.Push(paragraph);