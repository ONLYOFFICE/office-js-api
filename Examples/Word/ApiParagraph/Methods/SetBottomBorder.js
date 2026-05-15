// Draw a border below a paragraph in a document.

// How do I add a bottom border line to a paragraph in a document?

// Visually separate a paragraph from the content beneath it using a styled bottom border in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
paragraph.SetBottomBorder("single", 8, 0, 255, 111, 61);