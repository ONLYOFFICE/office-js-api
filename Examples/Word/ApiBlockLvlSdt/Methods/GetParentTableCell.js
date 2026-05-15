// Find the table cell that contains a content control in a document.

// How do I access the table cell that holds a content control in a document?

// Place a content control inside a table cell and then apply a border to that cell in a document.

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
let parentTableCell = blockLvlSdt.GetParentTableCell();
parentTableCell.SetCellBorderTop("single", 32, 0, 51, 51, 51);