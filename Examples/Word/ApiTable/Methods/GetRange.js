// Select a range of content spanning specific cells of a table in a document.

// How do I target a portion of a table's content by cell coordinates in a document?

// Apply formatting to a defined span of table cells in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
let range = table.GetRange(0, 3);
range.SetBold(true);