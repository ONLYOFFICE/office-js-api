// This example shows how to get a paragraph from all the paragraphs that are in the range.

// Get a paragraph using its index position.

// Make bold the second paragraph of the range.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let rangeParagraph = range.GetParagraph(1);
rangeParagraph.SetBold("true");