// Get the end page number of a range in a document.

// How to get the end page for a cell range?

// Get the end page and display the result in a document.

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
resultParagraph.AddText('First paragraph range ends on page: ' + firstRange.GetEndPage());
resultParagraph.AddLineBreak();
resultParagraph.AddText('Second paragraph range ends on page: ' + secondRange.GetEndPage());
doc.Push(resultParagraph);