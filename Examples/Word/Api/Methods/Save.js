// Save changes to the specified document.

// Add a text to the first paragraph of the document and save these changes.

// How to save changes made to the paragraph object in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();