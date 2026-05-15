// Delete a specific paragraph from a shape's content by its position in a document.

// How do I remove one paragraph at a given index from a shape's content in a document?

// Prune a numbered list of paragraphs inside a shape by targeting the unwanted entry's position.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 1926590, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("This is paragraph #1.");
for (let i = 1; i < 5; ++i) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText("This is paragraph #" + (i + 1) + ".");
	docContent.Push(paragraph);
}
docContent.RemoveElement(2);
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
docContent.Push(paragraph);