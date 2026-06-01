// Convert a pica measurement to typographic points and display the result in a document.

// How do I find the point equivalent of a value given in picas in a document?

// Write out how many points correspond to a specific number of picas in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const picas = 100;
const points = Api.PicasToPoints(picas);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');
doc.Push(paragraph);