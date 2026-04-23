// Apply a named style to a paragraph in a document.

// How do I retrieve and apply a built-in heading style in a document?

// Reuse an existing style from the style gallery to format text without defining custom properties.

let doc = Api.GetDocument();
let noSpacingStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");