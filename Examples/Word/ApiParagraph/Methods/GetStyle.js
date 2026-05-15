// Read the style applied to a paragraph in a document.

// How do I get the name of the style assigned to a paragraph in a document?

// Apply a heading style, then retrieve and display the style name to confirm the assignment in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paragraph.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());