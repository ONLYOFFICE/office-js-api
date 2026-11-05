// Find the deepest level of nested tables in a document with a document visitor.

// The Table and TableEnd hooks enclose the rows of a table, so they can track how deep the current table is.

// Put a table inside a table cell and write the maximum nesting level into a new paragraph.

const doc = Api.GetDocument();
const outer = Api.CreateTable(2, 2);
outer.SetStyle(doc.GetStyle("Bordered"));
const inner = Api.CreateTable(2, 2);
inner.SetStyle(doc.GetStyle("Bordered"));
outer.GetCell(0, 0).GetContent().Push(inner);
doc.Push(outer);

let depth = 0;
let maxDepth = 0;
const visitor = doc.GetDocumentVisitor();
visitor.Table = function () {
	depth += 1;
	maxDepth = Math.max(maxDepth, depth);
	return false;
};
visitor.TableEnd = function () {
	depth -= 1;
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Maximum table nesting level: " + maxDepth);
doc.Push(result);