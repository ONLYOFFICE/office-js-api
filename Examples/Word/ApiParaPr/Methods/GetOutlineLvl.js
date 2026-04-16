// Get the outline level of paragraphs with different levels in a document.

// How to get the outline lvl for a paragraph properties in a document?

// Get the outline lvl and display the result in a document.

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