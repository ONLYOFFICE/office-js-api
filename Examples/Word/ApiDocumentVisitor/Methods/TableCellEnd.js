// Find the table cell with the longest text with a document visitor.

// The TableCellEnd hook is called after all the text of a cell has been visited.

// Fill a table, measure the text of each cell and make the longest one bold.

const doc = Api.GetDocument();
const table = Api.CreateTable(2, 2);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Plan");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Review the quarterly results");
table.GetCell(1, 0).GetContent().GetElement(0).AddText("Budget");
table.GetCell(1, 1).GetContent().GetElement(0).AddText("Approve");

let length = 0;
let maxLength = -1;
let longest = null;
const visitor = doc.GetDocumentVisitor();
visitor.TableCell = function () {
	length = 0;
	return false;
};
visitor.Text = function (text) {
	length += text.length;
};
visitor.TableCellEnd = function (cell) {
	if (length > maxLength) {
		maxLength = length;
		longest = cell;
	}
};
visitor.Traverse();

longest.GetContent().GetElement(0).SetBold(true);