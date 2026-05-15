// Navigate to the cell that follows a given table cell in a document.

// How do I move to the next cell after a specific table cell in a document?

// Step forward from one table cell to the adjacent one in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
doc.Push(table);
let nextCell = table.GetCell(0, 0).GetNext();
nextCell.GetContent().GetElement(0).SetBold(true);