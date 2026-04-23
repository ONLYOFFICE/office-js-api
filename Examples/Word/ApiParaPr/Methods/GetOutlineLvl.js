// Read the outline level assigned to paragraphs at different hierarchy positions in a document.

// How do I get the outline level of a paragraph in a document?

// Verify the heading structure by checking outline levels across multiple paragraphs in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('To see outline levels, open "Headings" on the "View" tab.');

const levels = [1, 5, 8];
for (let i = 0; i < levels.length; i++) {
	const paragraph = Api.CreateParagraph();
	const paraPr = paragraph.GetParaPr();
	paraPr.SetOutlineLvl(levels[i]);
	paragraph.AddText('Outline level: ' + paraPr.GetOutlineLvl());
	doc.Push(paragraph);
}