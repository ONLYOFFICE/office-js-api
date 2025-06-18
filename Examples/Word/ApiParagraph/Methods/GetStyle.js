// This example shows how to get the paragraph style method.

// How to get the style of the paragraph.

// Get the paragraph style and display its name.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paragraph.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());