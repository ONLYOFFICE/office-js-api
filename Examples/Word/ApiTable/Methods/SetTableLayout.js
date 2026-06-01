// Choose whether a table sizes its columns automatically or keeps them fixed in a document.

// How do I lock a table's column widths so they do not change in a document?

// Prevent a table from resizing its columns when content changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetTableLayout("fixed");
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
table.SetStyle(tableStyle);
doc.Push(table);