// Report the number of rows of every table in a document with a document visitor.

// The Table hook receives each table, and returning true skips its rows, cells and text.

// Add two tables and write the row count of each table into a new paragraph.

const doc = Api.GetDocument();
const small = Api.CreateTable(2, 2);
small.SetStyle(doc.GetStyle("Bordered"));
doc.Push(small);
const large = Api.CreateTable(4, 3);
large.SetStyle(doc.GetStyle("Bordered"));
doc.Push(large);

const rows = [];
const visitor = doc.GetDocumentVisitor();
visitor.Table = function (table) {
	rows.push(table.GetRowsCount());
	return true;
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Rows per table: " + rows.join(", "));
doc.Push(result);