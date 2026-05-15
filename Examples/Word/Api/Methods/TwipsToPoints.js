// Convert a measurement from twips to points in a document.

// How do I convert twips to points in a document?

// Display the point equivalent of a twip value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const twips = 100;
const points = Api.TwipsToPoints(twips);
paragraph.AddText(twips + ' twips are equal to ' + points + ' points.');
doc.Push(paragraph);