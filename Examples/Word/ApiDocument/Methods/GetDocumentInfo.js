// This example shows how to get the document info represented as an object and paste the application name into the last paragraph.
let document = Api.GetDocument();
let docInfo = document.GetDocumentInfo();
let paragraph = Api.CreateParagraph();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
document.Push(paragraph);