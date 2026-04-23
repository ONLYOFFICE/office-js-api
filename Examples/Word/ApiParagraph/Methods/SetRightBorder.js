// Add a border to the right side of a paragraph in a document.

// How do I place a visible border along the right edge of a paragraph in a document?

// Decorate a paragraph with a colored line on its right side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its right side. ");
paragraph.AddText("The space between the right side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetRightBorder("single", 16, 8, 255, 111, 61);