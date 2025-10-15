// This example shows how to convert lines to points.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const lines = 100;
const points = Api.LinesToPoints(lines);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');
doc.Push(paragraph);
