// Remove an element using the position specified in a document.

// Remove the element using its index in a document.

// Remove the element for a document content in a document.

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