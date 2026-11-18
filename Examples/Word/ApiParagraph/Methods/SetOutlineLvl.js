// Assign an outline level to paragraphs to structure the document hierarchy in a document.

// How do I mark a paragraph as a heading level for the document outline in a document?

// Control which paragraphs appear as headings in the navigation pane of a document.

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