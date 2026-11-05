// Number the rows of every table in a document with a document visitor.

// The TableRow hook is called for each row before its cells are visited.

// Add a table and write the row number into the first cell of each row.

const doc = Api.GetDocument();
const table = Api.CreateTable(3, 2);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);

const visitor = doc.GetDocumentVisitor();
visitor.TableRow = function (row) {
	row.GetCell(0).GetContent().GetElement(0).AddText("Row " + (row.GetIndex() + 1));
	return true;
};
visitor.Traverse();