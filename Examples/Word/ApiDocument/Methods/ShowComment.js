// This example shows how to display a comment by its ID.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text has a comment attached to it.');

const range = paragraph.GetRange();
const comment = range.AddComment('Please review this section.', 'John');

if (comment) {
	doc.ShowComment(comment.GetId());
	const resultParagraph = Api.CreateParagraph();
	const author = comment.GetAuthorName();
	resultParagraph.AddText('Comment by ' + author + ' is now displayed.');
	doc.Push(resultParagraph);
}
