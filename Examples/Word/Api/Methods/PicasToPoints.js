// Convert picas to points in a document.

// How do I convert picas to points in a document?

// Convert picas to points and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const picas = 100;
const points = Api.PicasToPoints(picas);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');
doc.Push(paragraph);