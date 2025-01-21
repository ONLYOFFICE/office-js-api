// This example removes an element using the position specified.
let document = Api.GetDocument();
let paragraph0 = document.GetElement(0);
paragraph0.AddText("This is paragraph #1.");
for (let i = 0; i < 4; ++i) {
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is paragraph #" + (i + 2) + ".");
	document.Push(paragraph);
}
document.RemoveElement(2);
let paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
document.Push(paragraph);