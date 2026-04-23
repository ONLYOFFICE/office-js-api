// Traverse all paragraphs and tables using a document visitor in a document.

// How do I walk through every element in a document content with a visitor in a document?

// Count paragraphs and tables automatically without iterating element indexes by hand.

const doc = Api.GetDocument();

const p1 = doc.GetElement(0);
p1.AddText('First paragraph.');

const p2 = Api.CreateParagraph();
p2.AddText('Second paragraph.');
doc.Push(p2);

const table = Api.CreateTable(2, 2);
table.GetCell(0, 0).GetContent().GetElement(0).AddText('Cell A1');
table.GetCell(1, 1).GetContent().GetElement(0).AddText('Cell B2');
doc.Push(table);

let paragraphCount = 0;
let tableCount = 0;

const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function () {
	paragraphCount += 1;
	return false;
};
visitor.Table = function () {
	tableCount += 1;
	return false;
};
visitor.Traverse(false);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Paragraphs found: ' + paragraphCount + ' (including paragraphs inside tables)');
resultParagraph.AddLineBreak();
resultParagraph.AddText('Tables found: ' + tableCount);
doc.Push(resultParagraph);