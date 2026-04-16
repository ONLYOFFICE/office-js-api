// Get a table that contains the current content control in a document.

// How can I get the parent table using a block-level content control in a document?

// Get the parent table for a block-level content control in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
let cell = table.GetRow(0).GetCell(0);
cell.AddElement(0, blockLvlSdt);
let parentTable = blockLvlSdt.GetParentTable();
cell = parentTable.GetRow(2).GetCell(0);
parentTable.RemoveRow(cell);