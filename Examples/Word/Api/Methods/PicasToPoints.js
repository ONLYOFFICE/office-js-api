// This example shows how to convert picas to points.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const picas = 100;
const points = Api.PicasToPoints(picas);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');
doc.Push(paragraph);
