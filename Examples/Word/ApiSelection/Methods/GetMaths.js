// This example shows how to get an array of mathematical formulas from the current selection.

const doc = Api.GetDocument();
doc.AddMathEquation('e^(iπ) + 1 = 0', 'unicode');

let paragraph = doc.GetElement(0);
paragraph.Select();

const selection = doc.GetSelection();
const maths = selection.GetMaths();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of math formulas in selection: ' + maths.length);
doc.Push(paragraph);
