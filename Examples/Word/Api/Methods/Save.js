// This example saves changes to the specified document.

// Adds a text to the first paragraph of the document and saves these changes.

// How to save changes made to the ApiParagraph object.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();