// Add a visible border between adjacent paragraphs that share the same border settings in a document.

// How do I draw a dividing line between consecutive paragraphs in a document?

// Separate groups of related paragraphs with a styled border line for clearer visual structure in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border between it and the next paragraph. ");
paragraph.AddText("No additional spacing between the border and the paragraphs is added.");
paragraph.SetBetweenBorder("single", 24, 0, 255, 111, 61);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. We will add a thin black border between it and the next paragraph. ");
paragraph.AddText("We added additional spacing between the border and the paragraphs.");
paragraph.SetBetweenBorder("single", 12, 10, 51, 51, 51);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the third paragraph. The border can be displayed above it only, as there are no new paragraphs after it.");
doc.Push(paragraph);