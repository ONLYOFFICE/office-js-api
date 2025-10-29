// This example shows how to convert inches to points.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const inches = 100;
const points = Api.InchesToPoints(inches);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');
doc.Push(paragraph);
