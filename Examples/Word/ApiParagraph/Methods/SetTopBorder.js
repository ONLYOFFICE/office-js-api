// Draw a visible line above a paragraph to separate it from the content above in a document.

// How do I add a decorative or structural border along the top of a paragraph in a document?

// Visually divide sections of text by placing a styled line at the top of a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border above it.");
paragraph.SetTopBorder("single", 24, 0, 255, 111, 61);