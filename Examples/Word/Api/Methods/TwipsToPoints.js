// Convert twips to points in a document.

// How can I convert twips to points in a document?

// Convert twips to points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const twips = 100;
const points = Api.TwipsToPoints(twips);
paragraph.AddText(twips + ' twips are equal to ' + points + ' points.');
doc.Push(paragraph);