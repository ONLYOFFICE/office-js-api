// This example sets a style for the paragraph.

// Set the style of the paragraph to "Heading 6".

// Create a text in a paragraph styled with the 'Heading 6' style.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");