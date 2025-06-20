// This example pushes 5 paragraphs to actually add its to the document.

const doc = Api.GetDocument();

const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
	const newParagraph = Api.CreateParagraph();
	newParagraph.AddText("This is " + (i + 1) + " paragraph.");
	doc.Push(newParagraph);
}
