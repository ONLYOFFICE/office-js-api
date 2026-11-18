// Read the outline level assigned to each paragraph in a document.

// How do I find out the outline level of a paragraph in a document?

// Create paragraphs at every outline level and display each level number in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.SetOutlineLvl(1);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let level = 1; level <= 9; level++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(level);
	paragraph.AddText('This is a paragraph with outline level ' + paragraph.GetOutlineLvl() + '.');
	doc.Push(paragraph);
}