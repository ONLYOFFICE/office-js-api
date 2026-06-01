// Append new paragraphs to the end of a document.

// How do I add multiple paragraphs one after another in a document?

// Build a sequence of numbered paragraphs by pushing each one onto the document in a document.

const doc = Api.GetDocument();

const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
	const newParagraph = Api.CreateParagraph();
	newParagraph.AddText("This is " + (i + 1) + " paragraph.");
	doc.Push(newParagraph);
}