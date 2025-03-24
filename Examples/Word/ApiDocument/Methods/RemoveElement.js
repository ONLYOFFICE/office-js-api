// This example removes an element using the position specified.

// How to delete the paragraph from the document.

// Remove the second element of the document.

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