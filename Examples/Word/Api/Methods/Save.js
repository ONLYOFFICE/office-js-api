// Add text to a paragraph and save the changes in a document.

// How do I save changes after editing a paragraph in a document?

// Write text into the first paragraph and persist the result to the file in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();