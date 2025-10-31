// This example shows how to get an array of comments from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This text has a comment attached to it.');

const range = paragraph.GetRange(0, 20);
range.AddComment('This is a comment', 'John Smith');
range.Select();

const selection = doc.GetSelection();
const comments = selection.GetComments();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of comments in selection: ' + comments.length);
doc.Push(paragraph);

if (comments.length > 0) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText('First comment text: ' + comments[0].GetText());
	doc.Push(paragraph);
}
