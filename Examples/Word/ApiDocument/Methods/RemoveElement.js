// Remove a paragraph at a specified position in a document.

// How do I delete a specific paragraph by its index in a document?

// Target and drop one paragraph out of several without affecting the rest in a document.

let doc = Api.GetDocument();
let paragraph0 = doc.GetElement(0);
paragraph0.AddText("This is paragraph #1.");
for (let i = 0; i < 4; ++i) {
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is paragraph #" + (i + 2) + ".");
	doc.Push(paragraph);
}
doc.RemoveElement(2);
let paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
doc.Push(paragraph);