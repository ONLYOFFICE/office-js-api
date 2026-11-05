// Shade the table cells that contain a word with a document visitor.

// The TableCell hook receives each cell before its content is visited.

// Fill a table with task states and shade the cells with the "Done" text.

const doc = Api.GetDocument();
const table = Api.CreateTable(2, 2);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Design");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Done");
table.GetCell(1, 0).GetContent().GetElement(0).AddText("Testing");
table.GetCell(1, 1).GetContent().GetElement(0).AddText("In progress");

const visitor = doc.GetDocumentVisitor();
visitor.TableCell = function (cell) {
	if (cell.GetContent().GetElement(0).GetText().indexOf("Done") !== -1)
		cell.SetShd(Api.CreateShd("clear", Api.Color("#E2EFDA")));
	return true;
};
visitor.Traverse();