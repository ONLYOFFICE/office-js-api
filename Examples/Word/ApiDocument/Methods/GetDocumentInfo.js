// Get the document info represented as an object and paste the application name into the last paragraph in a document.

// How to get information such as application with which the document was created.

// Display the document information.

let doc = Api.GetDocument();
let docInfo = doc.GetDocumentInfo();
let paragraph = Api.CreateParagraph();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
doc.Push(paragraph);