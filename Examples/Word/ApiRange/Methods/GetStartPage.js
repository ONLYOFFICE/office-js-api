// This example shows how to get the start page number of a range.

const doc = Api.GetDocument();

const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This text is on the first page.');

doc.MoveCursorToEnd();
doc.InsertBlankPage();

const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is on the second page.');
doc.Push(secondParagraph);

const firstRange = firstParagraph.GetRange();
const secondRange = secondParagraph.GetRange();

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('First paragraph range starts on page: ' + firstRange.GetStartPage());
resultParagraph.AddLineBreak();
resultParagraph.AddText('Second paragraph range starts on page: ' + secondRange.GetStartPage());
doc.Push(resultParagraph);
