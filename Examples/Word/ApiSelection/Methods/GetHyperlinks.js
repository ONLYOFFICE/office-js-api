// This example shows how to get an array of hyperlinks from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

paragraph.AddText('Visit ');
const hyperlink = paragraph.AddHyperlink('https://www.onlyoffice.com', 'ONLYOFFICE');
paragraph.AddText(' website.');
paragraph.Select();

const selection = doc.GetSelection();
const hyperlinks = selection.GetHyperlinks();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of hyperlinks in selection: ' + hyperlinks.length);
doc.Push(paragraph);

if (hyperlinks.length > 0) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText('First hyperlink URL: ' + hyperlinks[0].GetLinkedText());
	doc.Push(paragraph);
}
