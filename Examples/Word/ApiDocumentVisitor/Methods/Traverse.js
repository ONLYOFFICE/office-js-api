// Traverse a document with a document visitor and count its paragraphs, tables and characters.

// How do I walk through all paragraphs, tables and text of a document?

// Add a paragraph and a table, count what the visitor finds and write the result into a new paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
const table = Api.CreateTable(2, 2);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(1, 1).GetContent().GetElement(0).AddText("Cell 4");
doc.Push(table);

let paragraphs = 0;
let tables = 0;
let characters = 0;
const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function (paragraph) {
	paragraphs += 1;
	return false;
};
visitor.Table = function (table) {
	tables += 1;
	return false;
};
visitor.Text = function (text) {
	characters += text.length;
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Paragraphs: " + paragraphs + ", tables: " + tables + ", characters: " + characters);
doc.Push(result);