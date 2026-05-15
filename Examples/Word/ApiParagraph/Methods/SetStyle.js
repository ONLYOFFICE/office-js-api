// Apply a named style to a paragraph in a document.

// How do I format a paragraph using one of the built-in styles in a document?

// Give a paragraph a consistent appearance by assigning it a predefined style in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");