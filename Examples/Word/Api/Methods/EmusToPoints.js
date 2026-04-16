// Convert EMUs (english metric units) to points in a document.

// How can I convert emus to points in a document?

// Convert emus to points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 100;
const points = Api.EmusToPoints(emus);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');
doc.Push(paragraph);