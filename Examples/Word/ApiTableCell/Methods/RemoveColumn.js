// Delete an entire column by targeting one of its cells in a document.

// How do I remove a column from a table using a cell reference in a document?

// Erase a whole table column by selecting any cell within it in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 0).RemoveColumn();
table.GetCell(0, 0).GetContent().GetElement(0).AddText("A column with Cell 1 was removed.");