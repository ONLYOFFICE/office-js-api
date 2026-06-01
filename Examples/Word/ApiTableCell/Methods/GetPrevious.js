// Navigate to the cell that precedes a given table cell in a document.

// How do I move to the cell before a specific table cell in a document?

// Step backward from one table cell to the adjacent one in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
doc.Push(table);
let previousCell = table.GetCell(0, 1).GetPrevious();
previousCell.GetContent().GetElement(0).SetBold(true);