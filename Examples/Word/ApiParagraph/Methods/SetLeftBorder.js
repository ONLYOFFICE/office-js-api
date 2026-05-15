// Add a colored border along the left edge of a paragraph in a document.

// How do I draw a vertical line on the left side of a paragraph in a document?

// Highlight a paragraph by placing a styled border on its left side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its left side. ");
paragraph.AddText("The space between the left side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetLeftBorder("single", 16, 8, 255, 111, 61);