// Apply a named style to a paragraph to control its appearance in a document.

// How do I assign a built-in style such as a heading to a paragraph in a document?

// Reuse a predefined heading style on a paragraph instead of applying formatting manually.

let doc = Api.GetDocument();
let heading6Style = doc.GetStyle("Heading 6");
let paraPr = heading6Style.GetParaPr();
paraPr.SetJc("center");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(heading6Style);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");